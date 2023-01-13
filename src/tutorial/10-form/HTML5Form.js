import React, { useState } from 'react'

const HTML5Form = () => {
  const [inputChange, setInputChange] = useState('')
  const handleInputChange = (event) => {
    setInputChange(event.target.value)
  }
  const [radioChange, setRadioChange] = useState()
  const food = ['雞腿飯', '排骨飯', '魯肉飯', '素食']
  const [agree, setAgree] = useState(false)
  const [likeList, setLikeList] = useState(['西瓜'])
  const fruitOptions = ['西瓜', '香蕉', '蘋果']
  const handleCheckBoxChange = (event) => {
    setAgree(event.target.checked)
  }
  const petOptions = ['貓', '狗', '兔']
  // state中要記錄各選項的物件
  // [ {id:1, value:'貓', checked:false} ,...]
  const [pets, setPets] = useState(
    petOptions.map((v, i) => {
      return { id: i, value: v, checked: false }
    })
  )

  // select
  const cityOptions = ['台北市', '台中市', '高雄市']
  const [city, setCity] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>
      {/* input */}
      <section id='input-text'>
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputChange}
          onChange={handleInputChange}
        />
      </section>
      <br />
      <br />
      {/* radio */}
      <section id='radio-group'>
        <h2>選項按鈕(radio-group)</h2>
        {
          food.map((item, index) => (
            <div key={index}>
              <input
                type="radio"
                id={index}
                value={item}
                checked={radioChange === item}
                onChange={event => setRadioChange(event.target.value)}
              />
              <label htmlFor={index}>{item}</label>
            </div>
          ))
        }
      </section>
      <br />
      <br />
      {/* checkbox */}
      <section id='checkbox'>
        <h2>Check Box (single)</h2>
        <input
          type="checkbox"
          id="a"
          checked={agree}
          onChange={handleCheckBoxChange}
        />
        <label htmlFor="a">Agree</label>
      </section>
      <br />
      <br />
      {/* checkbox-group */}
      <section id='checkbox-group'>
        {
          fruitOptions.map((v, i) => (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={event => {
                  const targetValue = event.target.value

                  // 先判斷是否有在state陣列(likeList)中
                  if (likeList.includes(targetValue)) {
                    // 如果 有 在state陣列中 -> 從state陣列移除
                    const newLikeList = likeList.filter((v2, i2) => {
                      return v2 !== targetValue
                    })

                    setLikeList(newLikeList)
                  } else {
                    // 如果 沒有 在state陣列中 -> 加入到state陣列
                    const newLikeList = [...likeList, targetValue]
                    setLikeList(newLikeList)
                  }
                }}
              />
              <label>{v}</label>
            </div>
          ))
        }
      </section>
      <br />
      <br />
      {/* checkbox-group-2 */}
      <section id="checkbox-group-2">
        <h2>核取方塊2(群組)(checkbox-group-2)</h2>
        {
          pets.map((v, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  value={v.value}
                  checked={v.checked}
                  onChange={() => {
                    const newPets = pets.map((v2, i2) => {
                      if (v2.id === i) return { ...v2, checked: !v2.checked }
                      return { ...v2 }
                    })
                    setPets(newPets)
                  }}
                />
                <label>{v.value}</label>
              </div>
            )
          })
        }
      </section>
      <br />
      <br />
      {/* select */}
      <section id='select'>
        <h2>Dropdown</h2>
        <select
          value={city}
          onChange={event => setCity(event.target.value)}
        >
          <option value="">--請選擇城市--</option>
          {
            cityOptions.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            })
          }
        </select>
      </section>
    </>
  )
}

export default HTML5Form

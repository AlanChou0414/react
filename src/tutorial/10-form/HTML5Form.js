import React, { useState } from 'react'

const HTML5Form = () => {
  const [inputChange, setInputChange] = useState('')
  const [radioChange, setRadioChange] = useState()
  const handleInputChange = (event) => {
    setInputChange(event.target.value)
  }
  const food = ['雞腿飯', '排骨飯', '魯肉飯', '素食']
  const handleRadioChange = (event) => {
    setRadioChange(event.target.value)
  }
  return (
    <>
      <h1>可控表單元件</h1>
      <section id='input-text'>
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputChange}
          onChange={handleInputChange}
        />
      </section>
      <section id='radio-group'>
        <h2>選項按鈕(radio-group)</h2>
        {
          food.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  id={index}
                  value={item}
                  checked={radioChange === item}
                  onChange={handleRadioChange}
                />
                <label htmlFor={index}>{item}</label>
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default HTML5Form

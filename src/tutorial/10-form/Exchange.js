import React, { useState } from 'react'

const Exchange = () => {
  const [inputNTD, setInputNTD] = useState(0)
  const [inputUSD, setInputUSD] = useState(0)
  const [optionChange, setOptionChange] = useState('')

  const option = ['$USD', '$JPY']
  const handleChangeUSDtoNTD = (money) => (
    (money * 30.38).toFixed(2)
  )
  const handleChangeNTDtoUSD = (money) => (
    (money / 30.38).toFixed(2)
  )
  const handleChangeNTDtoJPY = (money) => (
    (money * 4.25).toFixed(2)
  )
  const handleChangeJPYtoNTD = (money) => (
    (money / 4.25).toFixed(2)
  )
  const handleChangeOption = (event) => (
    setOptionChange(event.target.value)
  )

  return (
    <>
      <h1>貨幣轉換</h1>
      <div>
        <input
          type="number"
          id='money'
          value={!inputNTD ? '' : inputNTD}
          onChange={event => {
            setInputNTD(+event.target.value)
            optionChange === '$USD'
              ? setInputUSD(handleChangeNTDtoUSD(event.target.value))
              : setInputUSD(handleChangeNTDtoJPY(event.target.value))
          }}
        />
        <label htmlFor="money">$NTD</label>
      </div>
      <div>
        <input
          type="number"
          id="change"
          value={!inputUSD ? '' : inputUSD}
          onChange={event => {
            setInputUSD(+event.target.value)
            optionChange === '$USD'
              ? setInputNTD(handleChangeUSDtoNTD(event.target.value))
              : setInputNTD(handleChangeJPYtoNTD(event.target.value))
          }}
        />
        <label htmlFor="change">{optionChange}</label>
      </div>
      <div>
        <select onChange={handleChangeOption}>
          <option>---option---</option>
          {
            option.map((item, index) => (
              <option
                key={index}
                value={item}
              >
                {item}
              </option>
            ))
          }
        </select>
      </div>
    </>
  )
}

export default Exchange

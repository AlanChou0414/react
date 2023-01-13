import React, { useState } from 'react'

const Exchange = () => {
  const [inputNTD, setInputNTD] = useState(0)
  const [inputUSD, setInputUSD] = useState(0)

  const handleChangeUSDtoNTD = (money) => {
    return (money * 30.38).toFixed(2)
  }
  const handleChangeNTDtoUSD = (money) => {
    return (money / 30.38).toFixed(2)
  }
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
            setInputUSD(handleChangeNTDtoUSD(inputNTD))
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
            setInputNTD(handleChangeUSDtoNTD(inputUSD))
          }}
        />
        <label htmlFor="change">$USD</label>
      </div>
    </>
  )
}

export default Exchange

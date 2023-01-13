import React, { useState, useEffect } from 'react'
// TODO: Birthday select
const Birthday = () => {
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [day, setDay] = useState()
  const [result, setResult] = useState()
  const now = new Date()
  const makeOption = (min, max) => {
    const option = []
    for (let i = min; i <= max; i++) {
      option.push(<option key={i} value={i}>{i}</option>)
    }
    return option
  }
  useEffect(() => {
    setResult(() => +(now.getFullYear() - year) >= 18 ? 'Yes!' : 'No!')
  }, [year, month, day])
  return (
    <>
      <h1>BIRTHDAY</h1>
      <div>
        <label htmlFor="day">西元</label>
        <select name="day" id="day" onChange={e => setYear(e.target.value)}>
          <option>---year---</option>
          {
            makeOption(1940, 2023).map(item => (
              item
            ))
          }
        </select>
        年
        <select name="day" id="day" onChange={e => setMonth(e.target.value)}>
          <option>---month---</option>
          {
            makeOption(1, 12).map(item => (
              item
            ))
          }
        </select>
        月
        <select name="day" id="day" onChange={e => setDay(e.target.value)}>
          <option>---day---</option>
          {
            makeOption(1, 31).map(item => (
              item
            ))
          }
        </select>
        日
      </div>
      <input
        type="button"
        value="Check!!"
      />
      {
        (year & month & day)
          ? <h5> {`滿18歲了嗎？ ${result}`}</h5>
          : <h5>Please Select Your Birthday</h5>
      }
    </>
  )
}

export default Birthday

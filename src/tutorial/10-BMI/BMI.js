import React, { useState, useEffect } from 'react'

const BMI = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [result, setResult] = useState('')
  useEffect(() => {
    setResult((weight / Math.pow(height / 100, 2)).toFixed(2))
  }, [height, weight])
  return (
    <>
      <h1>BMI</h1>
      <label htmlFor="height">Height</label><br />
      <input
        type="number"
        id="height"
        value={!height ? '' : height}
        onChange={e => setHeight(+e.target.value)}
      />
      <br />
      <label htmlFor="weight">weight</label><br />
      <input
        type="number"
        id="weight"
        value={!weight ? '' : weight}
        onChange={e => setWeight(+e.target.value)}
      />
      <br />
      <div>
        {
          (height && weight)
            ? <h3>{`BMI result : ${result}`}</h3>
            : <h3>Please Enter your Height and Weight</h3>
        }
      </div>
    </>
  )
}

export default BMI

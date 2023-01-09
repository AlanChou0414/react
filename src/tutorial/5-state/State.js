import React, { useState } from 'react'

const State = ({ test, setTest }) => {
  const handleButtonClick = () => {
    setTest(test + 1)
  }
  return (
    <>
      <h1>State</h1>
      <div>{test}</div>
      <input
        type="button"
        value="Plus"
        onClick={handleButtonClick}
      />
    </>
  )
}

export default State

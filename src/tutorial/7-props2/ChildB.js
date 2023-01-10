import React, { useState, useCallback } from 'react'

const Child = ({ setDataFromChild }) => {
  const [childData, setChildData] = useState('child-B data')
  const handleButtonClick = () => {
    setDataFromChild(childData)
  }
  return (
    <>
      <h1>Child-B</h1>
      <input
        type="button"
        value="CLICK"
        onClick={handleButtonClick}
      />
    </>
  )
}

export default Child

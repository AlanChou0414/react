import React from 'react'

const Child = ({ count, setCount }) => {
  const handleButton = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div>Child</div>
      <h1>{count}</h1>
      <input
        type="button"
        value="CLICK"
        onClick={handleButton}
      />
    </>
  )
}

export default Child

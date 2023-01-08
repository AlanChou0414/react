import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleCountPlus = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <input
        type='button'
        value='PLUS'
        onClick={handleCountPlus}
      />
    </>
  )
}

export default App

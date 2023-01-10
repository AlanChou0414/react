import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>Parent</div>
      <Child count={count} setCount={setCount} />
    </>
  )
}

export default Parent

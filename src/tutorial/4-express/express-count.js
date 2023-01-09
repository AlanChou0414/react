import React, { useState } from 'react'

const ExpressCount = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ExpressCount</h1>
      <h2>{count}</h2>
      <input
        type="button"
        value="CLICK"
        onClick={() => setCount(count + 1)}
      />
      <div>
        {count % 2 === 0 && <h2>{count} 是雙數！</h2>}
      </div>
    </>

  )
}

export default ExpressCount

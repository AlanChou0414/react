import React from 'react'

const Child = ({ data, dataFromChild }) => {
  return (
    <>
      <h1>Child-A</h1>
      <p>Come from {data}</p>
      <p>{dataFromChild}</p>
    </>
  )
}

export default Child

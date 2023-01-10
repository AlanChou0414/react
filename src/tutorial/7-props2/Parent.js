import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
  const [data, setData] = useState('parent data')
  const [dataFromChild, setDataFromChild] = useState('')
  return (
    <>
      <h1>Parent</h1>
      <p>{dataFromChild}</p>
      <ChildA data={data} />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}

export default Parent

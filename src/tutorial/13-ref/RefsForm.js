import React, { useRef } from 'react'

const RefsForm = () => {
  const inputRef = useRef(null)
  return (
    <>
      <h1>RefsForm</h1>
      <input type="text" ref={inputRef} />
      <input
        type="button"
        value="聚焦(focus)"
        onClick={() => {
          inputRef.current.focus()
        }}
      />
      <input
        type="button"
        value="失焦(blur)"
        onClick={() => {
          inputRef.current.blur()
        }}
      />
      <input
        type="button"
        value="獲得值(console.log)"
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      />
    </>
  )
}

export default RefsForm

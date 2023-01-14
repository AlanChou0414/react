import React from 'react'

const IdForm = () => {
  return (
    <>
      <h1>IdForm</h1>
      <input
        type="text"
        id="my-input"
      />
      <input
        type="button"
        value="聚焦(focus)"
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      />
      <input
        type="button"
        value="失焦(blur)"
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      />
      <input
        type="button"
        value="獲得值(console.log)"
        onClick={() => {
          console.log(document.getElementById('my-input').value())
        }}
      />
    </>
  )
}

export default IdForm

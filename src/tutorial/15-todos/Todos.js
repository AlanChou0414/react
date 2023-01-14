import React, { useState } from 'react'

const Todos = () => {
  const [inputValue, setInputValue] = useState('')
  const [todo, setTodo] = useState([
    { id: 1, content: '買iphone' },
    { id: 2, content: '學react' }
  ])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleTodoItem = (event) => {
    if (event.key === 'Enter') {
      setTodo([...todo, {
        id: Number(new Date()),
        content: inputValue
      }])
      setInputValue('')
    }
  }

  return (
    <>
      <h1>Todos</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleTodoItem}
      />
      <ul>
        {
          todo.map(item => {
            return (
              <li key={item.id}>{item.content}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Todos

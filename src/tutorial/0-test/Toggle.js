import React, { useState } from 'react'
import './Toggle.css'

const Toggle = () => {
  const [theme, setTheme] = useState(false)
  const handleToggle = () => {
    setTheme(!theme)
  }
  return (
    <div className={theme ? 'theme-dark' : 'theme-light'}>
      <div>Toggle</div>
      <p>This is toggle test!!</p>
      <input type="button" value='Switch' onClick={handleToggle} />
    </div>
  )
}

export default Toggle

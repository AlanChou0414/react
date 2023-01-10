import React, { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [hover, setHover] = useState('')
  const handleHover = () => {
    setHover('active')
  }
  return (
    <>
      <ul>
        <li>
          <a
            className={hover}
            onMouseDown={handleHover}
          >
            首頁
          </a>
        </li>
        <li>
          <a
            className={hover}
            onMouseDown={handleHover}
          >
            關於我們
          </a>
        </li>
        <li>
          <a
            className={hover}
            onMouseDown={handleHover}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  )
}

export default Menu

import React, { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [activeText, setActiveText] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']
  return (
    <>
      <ul>
        {
          menuItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={(e) => setActiveText(e.target.value)}
              >
                <a href='#' className={activeText === item ? 'active' : ''}>{item}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Menu

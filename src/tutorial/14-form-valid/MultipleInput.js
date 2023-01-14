import React, { useState } from 'react'
import validator from 'validator'

const card = '1111 2222 3333 4444'
const isValid = validator.isCreditCard(card)
console.log(isValid)

const MultipleInput = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    account: '',
    password: '',
    showPassword: false
  })
  const handleInputChange = (event) => {
    if (event.target.name === 'showPassword') {
      setUser({ ...user, showPassword: event.target.checked })
      return
    }
    // event.target.type / name / value / checked
    //! TODO:
    const newUser = {
      ...user,
      [event.target.name]: event.target.value
    }
    setUser(newUser)
  }
  return (
    <>
      <div>MultipleInput</div>
      <div>
        <label htmlFor="userName">Name : </label>
        <input
          type="text"
          name='userName'
          value={user.userName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          name='email'
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="account">Account : </label>
        <input
          type="text"
          name='account'
          value={user.account}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">password : </label>
        <input
          type={user.showPassword ? 'text' : 'password'}
          name='password'
          value={user.password}
          onChange={handleInputChange}
        />
        <input
          type="checkbox"
          name="showPassword"
          id='showPassword'
          checked={user.showPassword}
          onChange={handleInputChange}
        />
        <label htmlFor="showPassword">Show</label>
      </div>
    </>
  )
}

export default MultipleInput

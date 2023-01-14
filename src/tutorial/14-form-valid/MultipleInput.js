import React, { useState } from 'react'
import validator from 'validator'

// const card = '1111 2222 3333 4444'
// const isValid = validator.isCreditCard(card)
// console.log(isValid)

const MultipleInput = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    account: '',
    password: ''
  })
  const handleInputChange = (event) => {
    // event.target.type / name / value
    const newUser = { ...user, [event.target.name]: event.target.value }
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
          type="password"
          name='password'
          value={user.password}
          onChange={handleInputChange}

        />
      </div>
    </>
  )
}

export default MultipleInput

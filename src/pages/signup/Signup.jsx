import React, { useState } from 'react'

import styles from './Signup.module.css'
import { useSignup } from '../../components/hook/useSignup'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const { error, isPending, signup } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, password, email);
    signup(email, password, username)
  }

  return (
    <form className={styles['signup-form']}
    onSubmit={handleSubmit}
    >
      <h2>Sign up</h2>

      <label>
        <span>Username:</span>
        <input
          type="text"
          placeholder="Your Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>

      {!isPending && <button className="btn">Sign up</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <p>{error}</p>}

    </form>
  )
}

export default Signup
import React, { useState } from 'react'
import styles from './Login.module.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(password, email);
  }

  return (
    <form className={styles['login-form']}
    onSubmit={handleSubmit}
    >
      <h2>Login</h2>

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

      <button className="btn">Login</button>
    </form>
  )
}

export default Login
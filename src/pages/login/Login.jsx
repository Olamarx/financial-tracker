import React, { useState } from 'react'
import styles from './Login.module.css'
import { useLogin } from '../../hook/useLogin'

function Login() {
  const { login, error, isPending } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password);
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

      { !isPending && <button className="btn">Login</button> }
      { isPending && <button className="btn" disabled>Loading</button> }
      { error && <p>{error}</p> }
    </form>
  )
}

export default Login
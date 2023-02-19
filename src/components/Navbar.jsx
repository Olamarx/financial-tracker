import React from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../hook/useLogout';
import styles from './Navbar.module.css';

function Navbar() {
  const { logout } = useLogout()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          Money App
        </li>

        <li>
          <Link to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
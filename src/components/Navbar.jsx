import React from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../hook/useLogout';
import styles from './Navbar.module.css';
import { useAuthContext } from '../hook/useAuthContext';

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          Money App
        </li>

        {!user && (
        <>
        <li>
        <Link to="/login">Login</Link></li>

        <li> <Link to="/signup">Signup</Link> </li>
          </>
          )}
          {user  && (
            <>
            <li className={styles.name}> Hello, { user.displayName }</li>
            <li>
            <button className="btn" onClick={logout}>
            Logout
            </button>
            </li>
            </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
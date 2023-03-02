import React from 'react'
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hook/useAuthContext';

function Home() {
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
      <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}

export default Home
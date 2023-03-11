import React from 'react'
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import { useAuthContext } from '../../hook/useAuthContext';
import { useCollection } from '../../hook/useCollection';
import TransactionList from './TransactionList';

function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('transactions', ['uid', '==', user.uid], ['createdAt', 'desc'])
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        { error && <p>{error}</p> }
        {documents && <TransactionList transactions={documents} /> }
      </div>
      <div className={styles.sidebar}>
      <TransactionForm uid={user.uid}/>
      </div>
    </div>
  )
}

export default Home
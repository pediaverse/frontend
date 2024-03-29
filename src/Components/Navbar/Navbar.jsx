import React from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles['navbar']}>
        <div className={styles['navbar-logo-container']}>
            <img className={styles['navbar-logo']} src= "./Assets/logo.svg" alt='logo'></img>
        </div>
        <div className={styles['navbar-free-trial']}>Free Trial</div>
    </div>
  )
}

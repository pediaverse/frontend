import React from 'react'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'


export default function Home() {
  return (
    <div className={styles['home']}>
        <Navbar/>
        <div className={styles['home-heading']}>
            <div className={styles['home-main-heading']}>Do what you love, Love what you do</div>
            <div className={styles['home-sub-heading']}>Discover and pursue your <span style={{color:'#28CD88'}}>passion</span> in life</div>
        </div>

        <div className={styles['home-foreground-container']}>
            <img className={styles['home-foreground']} src='./Assets/home-foreground.svg' alt='foreground'></img>
        </div>
    </div>
  )
}

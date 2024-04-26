import React from 'react'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <div className={styles['home']}>
        <Navbar/>
        <motion.div
          initial = {{x:'200px'}}
          animate = {{x:0}}
          transition={{duration: 0.5}}
          className={styles['home-heading']}>
            <div className={styles['home-main-heading']}>Do what you love, Learn what you love</div>
            <div className={styles['home-main-heading-mobile']}>
                <div className={styles['home-main-heading-mobile-top']}>Do what you love,</div>
                <div className={styles['home-main-heading-mobile-bottom']}>Learn what you love</div>
            </div>
            <div className={styles['home-sub-heading']}>Discover and pursue your <span style={{color:'#28CD88'}}>passion</span> in life</div>
        </motion.div>

        <div className={styles['home-foreground-container']}>
            <img className={styles['home-foreground']} src='./Assets/home-foreground.svg' alt='foreground'></img>
        </div>
    </div>
  )
}

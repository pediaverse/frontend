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
            <div className={styles['home-main-heading']}>Do what you love, Love what you do</div>
            <div className={styles['home-sub-heading']}>Discover and pursue your <span style={{color:'#28CD88'}}>passion</span> in life</div>
<<<<<<< HEAD
        </div>
=======
        </motion.div>

>>>>>>> 1f602137fb64bf4f47c9753a058fba72d481dd27
        <div className={styles['home-foreground-container']}>
            <img className={styles['home-foreground']} src='./Assets/home-foreground.svg' alt='foreground'></img>
        </div>
    </div>
  )
}

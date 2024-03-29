import React from 'react'
import styles from './HybridLearn.module.css'

export default function HybridLearn() {
  return (
    <div className={styles['hybrid-learn']}>
        <div className={styles['hybrid-learn-left']}>
            <div className={styles['hybrid-learn-left-container']}>
                <div className={styles['hybrid-learn-title']}>
                    <span style={{color:'#28CD88'}}>Hybrid Learning</span> Platform
                </div>
                <div className={styles['hybrid-learn-text']}>
                We combine the social and collaborative aspects of<br></br>
                in-person learning with the flexibility and individual<br></br> 
                focus of online modules.
                </div>
            </div>
        </div>
        <div className={styles['hybrid-learn-right']}>
            <div className={styles['hybrid-hand-container']}>
                <img className={styles['hybrid-hand-img']} src='./Assets/hand.svg' alt='hand'></img>
            </div>
        </div>

        <div className={styles['hybrid-learn-star-container']}>
            <img className={styles['hybrid-learn-star']} src='./Assets/star.svg' alt='star'></img>
        </div>
    </div>
  )
}

import React from 'react'
import styles from './AdaptiveLearn.module.css'

export default function AdaptiveLearn() {
  return (
    <div className={styles['adaptive-learn']}>
        
        <div className={styles['adaptive-learn-main']}>
            <div className={styles['adaptive-learn-title']}>
                <span style={{color:'#28CD88'}}>Adaptive</span> learning routes
            </div>
            <div className={styles['adaptive-learn-text']}>
            Through regular assessments and feedback, we<br></br>
            track your child’s progress and adapt our<br></br> 
            programs to meet their evolving needs.

            </div>
            <div className={styles['adaptive-star-container']}>
                <img className={styles['adaptive-star-img']} src='./Assets/star2.svg' alt = 'star'></img>
            </div>
        </div>
        <div className={styles['adaptive-road-container']}>
            <img className={styles['adaptive-road-img']} src = './Assets/road.svg' alt='road'></img>
        </div>
    </div>
  )
}

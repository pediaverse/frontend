import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles['about']}>
        <div className={styles['about-container']}>
            <div className={styles['our-mission']}>
                Our mission is to unlock and cultivate the true potential of a child<br></br> right from the start. We understand the importance of consistent<br></br> guidance and support in helping children develop their skills and<br></br> explore their passions.
            </div>
            <div className={styles['about-main-container']}>
                <div className={styles['about-main-img-container-one']}>
                    <img className={styles['about-main-img']} src='./Assets/plain8.svg' alt='img'></img>
                </div>
                <div className={styles['about-main-text']}>
                    Everybody is a <span style={{color:'#28CD88'}}>Genius</span> . But If You Judge a Fish by Its Ability to<br></br>
                    Climb a Tree, It Will Live Its Whole Life Believing that It is Stupid.
                </div>
                <div className={styles['about-main-img-container-two']}>
                <img className={styles['about-main-img']} src='./Assets/plain4.svg' alt='img'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

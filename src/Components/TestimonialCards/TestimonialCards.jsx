import React from 'react'
import styles from './TestimonialCards.module.css'
export default function TestimonialCards(props) {
  return (
    <div key={props.id} className={styles['testimonial-card']} style={{width:`${props.width}`}}>
        <div className={styles['card-inner-container']}>
            <div className={styles['card-user-info']}>
                <div className={styles['card-user-image-container']}>
                    <img className={styles['card-user-image']} alt='user-img' src={props.user_img}></img>
                </div>
                <div className={styles['card-user-name']}>
                    <div style={{color:'#2C2A50',fontSize:'20px', fontWeight:'900', lineHeight:'26px'}}>{props.name}</div>
                    <div style={{color:'#AAB0D8',fontSize:'17px', fontWeight:'600',lineHeight:'22px'}}>{props.user_id}</div>
                </div>
            </div>
            <div className={styles['user-testimonial']}>
                {props.testimonial}
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import styles from './Testimonial.module.css'
import Marquee from 'react-fast-marquee'
import TestimonialCards from '../TestimonialCards/TestimonialCards'


export default function Testimonial() {
    const arrOne = [
        {   
            width: '420px',
            name: 'Mayank Gupta',
            user_id: '@mayank_71203',
            user_img: './Assets/user3.jpeg',
            testimonial: 'Highlight of virtual teaching: being able to easily communicate with Spanish speaking families on Pediaverse ❤'
        },
        {
            width: '280px',
            name: 'Charlotte',
            user_id: '@charlotte_tim',
            user_img: './Assets/user4.png',
            testimonial: 'Thank you, Pediaverse, for making mindfulness accessible and enjoyable!"'
        },
        
        {   
            width: '400px',
            name: 'Jennifer H.',
            user_id: '@jennifermhardin',
            user_img: './Assets/user1.png',
            testimonial: 'Does everyone else love Pediaverse as much as we do here? 😍'
        },
        {   
            width: '350px',
            name: 'Razik',
            user_id: '@razik_m',
            user_img: './Assets/user5.png',
            testimonial: 'Love using Pediaverse to practice mindfulness! What a great way to start the day'
        },
        {   
            width: '280px',
            name: 'Julissa R.',
            user_id: '@jd_rowell',
            user_img: './Assets/user2.png',
            testimonial: 'Love using Pediaverse to practice mindfulness! What a great way to start the day'
        },
        {
            width: '400px',
            name: 'Isabella',
            user_id: '@its_isabella',
            user_img: './Assets/user1.png',
            testimonial: 'Does everyone else love Pediaverse as much as we do here? 😍'
        },
        
    ];

    const arrTwo = [
        {
            width: '400px',
            name: 'Isabella',
            user_id: '@its_isabella',
            user_img: './Assets/user1.png',
            testimonial: 'Does everyone else love Pediaverse as much as we do here? 😍'
        },
        {
            width: '280px',
            name: 'Charlotte',
            user_id: '@charlotte_tim',
            user_img: './Assets/user4.png',
            testimonial: 'Thank you, Pediaverse, for making mindfulness accessible and enjoyable!"'
        },
        {
            width: '420px',
            name: 'Mayank Gupta',
            user_id: '@mayank_71203',
            user_img: './Assets/user3.jpeg',
            testimonial: 'Highlight of virtual teaching: being able to easily communicate with Spanish speaking families on Pediaverse ❤'
        },
        {
            width: '280px',
            name: 'Julissa R.',
            user_id: '@jd_rowell',
            user_img: './Assets/user2.png',
            testimonial: 'Love using Pediaverse to practice mindfulness! What a great way to start the day'
        },
        {
            width: '420px',
            name: 'Jennifer H.',
            user_id: '@jennifermhardin',
            user_img: './Assets/user1.png',
            testimonial: 'Does everyone else love Pediaverse as much as we do here? 😍'
        },
        {
            width: '350px',
            name: 'Razik',
            user_id: '@razik_m',
            user_img: './Assets/user5.png',
            testimonial: 'Love using Pediaverse to practice mindfulness! What a great way to start the day'
        },
        {
            width: '280px',
            name: 'Victoria',
            user_id: '@victoria_us',
            user_img: './Assets/user2.png',
            testimonial: 'Love using Pediaverse to practice mindfulness! What a great way to start the day'
        },
    ];

  return (
    <div className={styles['testimonial']}>
        <div className={styles['testimonial-marquee-container']}>
            <Marquee direction='left' style={{marginBottom:'14px'}}>
                {arrOne.map((ele,id)=>(
                    <div key={id}>
                        <TestimonialCards 
                            id = {id}
                            width = {ele.width}
                            name = {ele.name}
                            user_id = {ele.user_id}
                            user_img = {ele.user_img}
                            testimonial = {ele.testimonial}
                        />
                    </div>
                ))}
            </Marquee>
            <Marquee direction='right'>
                {arrTwo.map((ele,id)=>(
                    <div key={id}>
                        <TestimonialCards 
                            id = {id}
                            width = {ele.width}
                            name = {ele.name}
                            user_id = {ele.user_id}
                            user_img = {ele.user_img}
                            testimonial = {ele.testimonial}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
        <div className={styles['testimonial-button']}> See more smiles</div>

    </div>
  )
}

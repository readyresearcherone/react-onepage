import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.png'
import Avt2 from '../../assets/avatar2.png'
import Avt3 from '../../assets/avatar3.png'
import Avt4 from '../../assets/avatar4.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: 'Name Name',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled'
  },
  {
    avatar: Avt2,
    name: 'Name Name',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled'
  },
  {
    avatar: Avt3,
    name: 'Name Name',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled'
  },
  {
    avatar: Avt4,
    name: 'Name Name',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled'
  }
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>review stuff</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

      modules={[ Autoplay, Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000}}>

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="client portrait" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>



    </section>
  )
}

export default Testimonials
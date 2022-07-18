import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {BsFillPersonBadgeFill} from 'react-icons/bs'

function About() {
  return (
    <section id="about">
    
    
    <h5>Lorem ipsum is a placeholder text commonly used.</h5>
    <h2>About me</h2>

    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
<img src={ME} alt="About" /> 
      </div>


    </div>

 <div className="about__content">
    <div className="about__cards">

    <article className='about__card'>
      <BsFillPersonBadgeFill className='about_icon'/>
      <h5>Research</h5>
      <small>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</small>
    </article>

    <article className='about__card'>
      <BsFillPersonBadgeFill className='about_icon'/>
      <h5>Research</h5>
      <small>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</small>
    </article>

    <article className='about__card'>
      <BsFillPersonBadgeFill className='about_icon'/>
      <h5>Research</h5>
      <small>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</small>
    </article>

    </div>
    <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

 </div>



    </div>

    
    </section>
    
  )
}

export default About
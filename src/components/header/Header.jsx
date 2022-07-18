import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   <header>

    <div id="home" className="container header__container">

    <h5>React project base on a tutorial</h5>
    <h1>React Project</h1>
    <h5 className="text-light">Lorem ipsum description</h5>
    <CTA/>
    <HeaderSocials/>

    <div className="me">
      <img src={ME} alt=""/>
    </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>




    </div>

   </header>
  )
}

export default Header
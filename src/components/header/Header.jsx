import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
   <header>

    <div id="home" className="container header__container">

    <h5>H5 title</h5>
    <h1>h1 title</h1>
    <h5 className="text-light">Audio Description Researcher</h5>
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
import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'


function HeaderSocials() {
  return (
    <div className='header__socials'>

    <a href="https://linkedin.com"><FaLinkedinIn/></a>
    <a href="https://github.com"><FaGithub/></a>

    </div>
  )
}

export default HeaderSocials
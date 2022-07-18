import React from 'react'
import CV from '../../assets/cv.pdf'
import theme1 from '../../theme'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        <h3 id="test" >test</h3>
        <h3 id="test2" >test2</h3>
    </div>
    
  )
  
  
}


export default CTA
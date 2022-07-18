import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
 
function Contact() {
  return (
    <section id="contact">

      <h5>Get in touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__options">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email:</h4>
            <h5>test@gmail.com</h5>
            <a href="mailto:test@gmail.com">Send a message</a>
          </article>

          <article className="contact__options">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email:</h4>
            <h5>test@gmail.com</h5>
            <a href="mailto:test@gmail.com">Send a message</a>
          </article>

          <article className="contact__options">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email:</h4>
            <h5>test@gmail.com</h5>
            <a href="mailto:test@gmail.com">Send a message</a>
          </article>


        </div>
     


      <form action="">
        <input type="text" name='name' placeholder='Your Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
      </div>

    </section>
  )
}

export default Contact
import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt=""/>
          <p> All rights reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Counters</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>080-12312312</p>
          <p>info@mail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2022 GPT-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
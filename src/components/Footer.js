import React from 'react'
import './footer.css'
import {BsFacebook, BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'
export const Footer = () => {
  return (
    <div id='footer'>
      <div className="socials">
        <div className="icon">
          <a href='https://www.facebook.com/rishabh.chand.75/' target="_blank" rel="noreferrer"><BsFacebook/></a>
        </div>
        <div className="icon">
        <a href='https://www.linkedin.com/in/rishabh-chand-b3141421a/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>
        <div className="icon">
        <a href='https://www.instagram.com/rishabhchandthakuri/' target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>
        <div className="icon">
        <a href='https://github.com/rishabhchand007' target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>
        
      </div>
      &#169;2022 Rishabh Chand. All rights reserved.
    </div>
  )
}
export default Footer;

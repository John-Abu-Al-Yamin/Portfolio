import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer-logo'>John Abou-Al-Yamin</a>

      <ul className='footer-link'>
        <li><a href="#">Home</a></li> 
        <li><a href="#about">About</a></li> 
        <li><a href="#experience">Experience</a></li> 
        <li><a href="#services">Services</a></li> 
        <li><a href="#portfolio">Portfolio</a></li> 
        <li><a href="#testimonials">Testimonials</a></li> 
        <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>
      <div className="footer-copy">
        <small>&copy; John Abou-Al-Yamin Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer

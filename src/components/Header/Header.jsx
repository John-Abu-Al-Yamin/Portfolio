import React from 'react'
import './Header.css'
import me from '../assets/me.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header id='#'>
       <div className="container header-contanier">
        <h5>Hello I'm</h5>
        <h1>John Abou-Al-Yamin</h1>
        <h5 className='text-light'>Front-end Developer From React_JS</h5>

        <div className="cta">
          <a href='#' className='btn'>Download CV</a>
          <a href='#contact'className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className="header-socials">
          <a href="https://linkedin.com" target='_blank'><FaLinkedin/> </a>
          <a href="https://gitgub.com" target='_blank'> <FaGithub/> </a>
        </div>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href='#contact' className='scroll-down'>Scroll-down</a>
         
       </div>
    </header>
  )
}

export default Header

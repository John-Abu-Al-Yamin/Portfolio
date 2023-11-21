import React from 'react'
 import me from '../assets/me-about.jpg'
 import './About.css'

 import { FaAward } from "react-icons/fa";
 import { TbUsers } from "react-icons/tb";
 import { VscFolderActive } from "react-icons/vsc";
 
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-image">
            <img src={me} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about-card'>
              <TbUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>20 Worldwide</small>
            </article>

            <article className='about-card'>
              <VscFolderActive className='about-icon'/>
              <h5>Projects</h5>
              <small>14+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Quas eos a soluta deleniti cum dolore magnam reiciendis tempore, dignissimos fugiat?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About

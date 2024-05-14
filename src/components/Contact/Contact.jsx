import React from 'react'
import './Contact.css'

import { MdOutlineEmail } from 'react-icons/md'
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>je0409389@gmail.com</h5>
            <a href="mailto:je0409389@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact-option'>
            < FaFacebookMessenger/>
            <h4>Messenger</h4>
            <h5>John Abou-Al-Yamin</h5>
            <a href="https://www.facebook.com/john.emad.7359" target="_blank">Send a Message</a>
          </article>

          <article className='contact-option'>
            <IoLogoWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>012-8697-6691</h5>
            <a href="https://api.whatsapp.com/send?phone=+201286976691" target="_blank">Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" placeholder='Your Full Name'required />
          <input type="email" placeholder='Your Email'required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='subnit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact

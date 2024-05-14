import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer-logo">
        John Abou-Al-Yamin
      </a>

      <ul className="footer-link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li>  */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com/john.emad.7359" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://www.linkedin.com/in/john-abou-al-yamin-0425a02aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:je0409389@gmail.com" target="_blank">
          <MdOutlineEmail />
        </a>
      </div>
      <div className="footer-copy">
        <small>&copy; John Abou-Al-Yamin Tutorials. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

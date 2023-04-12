import React from 'react'
import "./footer.css"
// import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"
import {FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Nikhil Kumar</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#bout">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/0nikhilkumar" target="_blank"><FaLinkedin/></a>
        <a href="https://www.instagram.com/soulpredator.ig/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/soulPredator_ig" target="_blank"><IoLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Nikhil Kumar. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
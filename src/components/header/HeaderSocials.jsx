import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/0nikhilkumar" target="_blank" className='linkedln'><FaLinkedin/></a>
        <a href="https://github.com/soulpredator0" target="_blank" className='github'><FaGithub/></a>
        <a href="https://twitter.com/soulPredator_ig" target="_blank" className='stack'><IoLogoTwitter/></a>
    </div> 
  )
}

export default HeaderSocials
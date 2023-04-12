import React from 'react'
import "./about.css"
import ME from "../../assets/nikhil.jpeg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 className='aboutme'>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Student</h5>
              <small>B.Tech(CSE)</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>I am Nikhil Kumar, I am Pre Graduate Student at CSJM, UIET KANPUR and I have 1.5+ years experience in Software Development, I have Completed 20+ Projects. I have Completed <span>Google Cloud Facilitator Program | April-July(2022)</span></p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
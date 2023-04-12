import React from 'react'
import "./service.css"
import {BiCheck} from "react-icons/bi"

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive web design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Wireframing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Front-end programming.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>UI Design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Front-end programming.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Back-end Programming.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Website Deployment.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Problem Solving</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Active listening</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Taking effective actions</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Thoughtful planning</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Effective team communication</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
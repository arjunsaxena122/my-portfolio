import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiLinkedinFill} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0prdfba', 'template_gfo5dq4', form.current, 'A2DfWVySksAQHEycQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mail.nikhil0008@gmail.com</h5>
            <a href="mailto:mail.nikhil0008@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
          <RiLinkedinFill className='contact_option-icon'/>
            <h4>Linkedln</h4>
            <h5>/0nikhilkumar</h5>
            <a href="https://www.linkedin.com/messaging" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>+123456789</h5> */}
            <a href=" https://wa.me/+918630446682" target="_blank">Send a message</a>
          </article>
        </div>

         <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required autoComplete='off' />
          <input type="email" name="email" placeholder='Your Email' required autoComplete='off'/>
          <textarea name="message" placeholder='Your Message' required rows="7" autoComplete='off'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact
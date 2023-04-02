import React from 'react'
import './Contact.css'
import '../cssforall/main.css'
import { FaAddressBook, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom';

export default function Contact() {
  //function call of button.ie authentication
  function validation(){
    <dd></dd>
  }

  return (
    <div className="container">
      <Nav />

      <div className="content">
        <div className='contact'>
          <div className="information">
            <div className="boxs">
              <div className="icon"> <FaAddressBook /></div>

              <span><b>address </b><br />
                Chabahil ,kathmandu</span>
            </div>
            <div className="boxs">
              <div className="icon"><FaEnvelope /></div>

              <span> <b>Email</b><br />
                suzalsidgel@gmail.com</span>
            </div>

            <div className="boxs">
              <div className="icon"><FaPhoneAlt /></div>

              <span><b>phone</b><br />9864047178</span>

            </div>
            <div className="boxs">
              <div className="icon">
                <FaWhatsapp />
              </div>
              <span><b>Whatapps</b> <br />9864047178 </span>
            </div>

          </div>

          {
            /*  staring on description which contain the from and my links*/
          }


          <div className="description">
            <form action="">
              <div className="section">
                <label htmlFor="name">Your Name</label>
                <input type="" name='input' id='name' placeholder='enter your  name' />
              </div>
              <div className="section">
                <label htmlFor="name">Email</label>
                <input type="" name='input' id='name' placeholder='Enter your Email' />
              </div>
              <div className="section">
                <label htmlFor="name">Message</label>
                <textarea name="" id="" cols="50" rows="3" placeholder='Enter your message'></textarea>
              </div>
              <button type="submit" onClick={validation}>Submit</button>
            </form>

            <div className="detial">
              <div className="thank_you_message">
                <h2>Get in touch</h2>
                <h4>Thank you to visit My profile.i can sure relability low cost fares and most important with safety and confort in mind</h4>
                <span>Don't forget to give your value message to me </span>
              </div>
              <div className="social_Media">
                <Link to='https://github.com/nirajansigdel'><FaGitAlt /></Link>
                <Link to='https://www.facebook.com/unique.sigdel.56'> <FaFacebook /></Link>
                <Link to='https://www.twitter.com/@sigdelNirajan'> <FaTwitter /></Link>
                <Link to='https://github.com/nirajansigdel'><FaLinkedin /></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

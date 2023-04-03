import react from 'react'
import './Contact.css'
import '../cssforall/main.css'
import { FaAddressBook, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaLinkedin, FaGitAlt, FaEnvelope } from "react-icons/fa";
import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom';
import Form from './Form';

export default function Contact() {
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
                        {  /* =============== import form from the Form.jsx=============*/}

                        <Form />

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

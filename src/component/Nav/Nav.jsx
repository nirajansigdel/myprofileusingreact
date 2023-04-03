import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import profile from '../Static/Image/profile.jpeg'
import { FaHome, FaShoppingBag, FaUserAlt, FaThLarge, FaMobile } from "react-icons/fa";
export default function Nav() {
  return (
    <div className='Navbar'>
      {/* ===============================profile=========================== */}
      <div className="profile">
        <div className="profile_image">
          <img src={profile} alt="" srcset="" />
        </div>
        <span className='name_position'>
          <span className='name'> Nirajan Sigdel</span>
          <br />
          <span className='position'>Fontend developer/Designer</span>
        </span>
      </div>
      {/* ===============================navlink=========================== */}
      <div className="navitem">
        <ul>
          <Link to='/'><li><span><FaHome /></span>Home</li></Link>
          <Link to='/about'><li><span><FaUserAlt /></span>About </li></Link>
          <Link to='/product'><li><span>< FaShoppingBag /></span>Product</li></Link>
          <Link to='/project'><li><span><FaThLarge /></span>Project</li></Link>
          <Link to='/contact'><li><span>< FaMobile /></span>Contact</li></Link>
        </ul>
      </div>

      {/*  ==================copyright====================================== */}
      <div className="copyright">
        <p>
          @copyright @2022 All right reserved |this templete is made by designer
        </p>
      </div>
    </div>



  )
}

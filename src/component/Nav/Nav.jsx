import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='Navbar'>
    <ul>
  <Link to='/'><li>Home</li></Link>
   <Link to='/about'><li>About </li></Link>
   <Link to='/product'><li>Product</li></Link>
   <Link to='/project'><li>Project</li></Link>  
   <Link to='/resume'><li>Resume</li></Link>  
   <Link to='/contact'><li>Contact</li></Link>  
   </ul> 
      </div>
      

  
  )
}

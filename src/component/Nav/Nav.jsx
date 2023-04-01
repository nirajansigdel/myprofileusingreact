import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Product from '../Product/product'
import './Nav.css'
export default function Nav() {
  return (
    <div className='Navbar'>
      <div className="navitem">  
      <ul>
     <li>Home</li>
       <li>About</li>
     <li>Product</li>
     <li>Project</li>
      <li>Resume</li>
    <li>Contact</li>
      </ul>
      </div>
      <div className="pages">
        <Home/>
        <About/>
        <Product/>
        <Contact/>
      </div>
     
      </div>
      

  
  )
}

import React from 'react'
import './Home.css'
import '../cssforall/main.css'
import myprofile from '../Static/Image/myprofile.png'
import Nav from '../Nav/Nav'
export default function Home() {
  return (
    <div className="container">
    <Nav/>
    <div className="content">
    <div className='home'>
      <div className="intro">
      <h1>Nirajan <br></br>sigdel</h1>
      </div>
      <div className="image_section">
        <div className="image">    
        <img src={myprofile} alt="" srcset="" />

 </div>
      </div>
    </div>
    </div>
    </div>
  )
}

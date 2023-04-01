import React from 'react'
import './Home.css'
import myprofile from '../Static/Image/myprofile.png'
export default function Home() {
  return (
    <>
   
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
    </>
  )
}

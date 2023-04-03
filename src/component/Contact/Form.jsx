import { useState } from "react";
import './Contact.css'

export default function Form() {

    //=========authentication process of from =========
    const [name, setname]=useState('');
    const [email, setemail]=useState('');
    const [textarea, settextarea]=useState('');
    const validation=(e)=>{
      e.preventDefault();
  
      const namevalue=e.target.value;
      const emailvalue=e.target.value;
      const textvalue=e.target.value;
      setname(namevalue)
      setemail(emailvalue)
      settextarea(textvalue)
      if(!name||!email ||!textarea){
        alert("input must be provide")
      }
  
    if(name.length<=2 || name.length>=100){
        alert("name should be between 2 t0 100")
      }
      if (email.length >= 2 && email.includes("@")) {
       alert(",o")
      }
     
      
    }
  return (
    <form action="">
    <div className="section">
      <label htmlFor="name">Your Name</label>
      <input type="" name='input' id='name' placeholder='enter your  name'  value={name} onChange={e=>setname(e.target.value)} />
    </div>
    <div className="section">
      <label htmlFor="name">Email</label>
      <input type="" name='input' id='name' placeholder='Enter your Email' value={email}   onChange={e=>setemail(e.target.value)} />
    </div>
    <div className="section">
      <label htmlFor="name">Message</label>
      <textarea name="" id="" cols="50" rows="3" placeholder='Enter your message'   value={textarea}   onChange={e=>settextarea(e.target.value)}></textarea>
    </div>
    <button type="submit" onClick={validation}>Submit</button>
  </form>
  )
}

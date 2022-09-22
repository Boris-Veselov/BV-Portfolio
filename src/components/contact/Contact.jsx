import './contact.scss';
import { useState } from "react";

export default function Contact() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='./BV-Portfolio/assets/shake.svg' alt=''/>
      </div>
      <div className='right'>
        <h2>Contact</h2>
          <div className='links' id='links'>
            <a href="https://github.com/Veselavalava"><img src="./BV-Portfolio/assets/github.png" alt='' style={{ padding: 10,height: 35 }} /></a>
            <a href="mailto:borisveselov@yahoo.com"><img src="./BV-Portfolio/assets/mail.png" alt='' style={{ padding: 10, height: 35 }} /></a>
            <a href="https://www.linkedin.com/in/veselavalava/"><img src="./BV-Portfolio/assets/linkedin.png" alt='' style={{ padding: 10,height: 35 }} /></a>
          </div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Email'/>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank you!</span>}
        </form>
      </div>
    </div>
  )
}



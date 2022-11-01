import React, { useState } from 'react'
import './Footer.css'
import fb from '../assets/footerSvg/fb.svg'
import insta from '../assets/footerSvg/insta.svg'
import twitter from '../assets/footerSvg/twitter.svg'

function Footer() {
  const [email,setEmail]=useState('')
  const handleSubmitFeedback = () =>{
    if(email===''){
      alert('Please enter email id')
      return
    }
    fetch('https://module-7-test-27806-default-rtdb.asia-southeast1.firebasedatabase.app/email.json',
         {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              userEmail: email,
             
          })
        }
    )
    .then(res => res.json())
    .then(data => {
      setEmail('')
      alert('Feedback Submitted successfully')
    })
  }
  return (
    <div className='footer'>
      <div className='title'>
        <div className='name'>
        <h3>Acciojob</h3>
        </div>
        <div className='social-media'>
          <img src={fb} />
          <img src={insta} />
          <img src={twitter} />
        </div>
      </div>
      <hr/>
      <div className='details'>
      <div className='row'>
      <div className='col'>
      <h5>Company Info</h5>
      <a>About Us</a>
      <a>Carrier</a>
      <a>We are hiring</a>
      <a>Blog</a>
      </div>
      <div className='col'>
      <h5>Legal</h5>
      <a>About Us</a>
      <a>Carrier</a>
      <a>We are hiring</a>
      <a>Blog</a>
      </div>
      <div className='col'>
      <h5>Features</h5>
      <a>Business Marketing</a>
      <a>User Analytic</a>
      <a>Live Chat</a>
      <a>Unlimited Support</a>
      </div>
      <div className='col'>
      <h5>Resources</h5>
      <a>IOS & Android</a>
      <a>Watch a Demo</a>
      <a>Customers</a>
      <a>API</a>
      </div>
      <div className='col'>
      <h5>Get In Touch</h5>
      <div className='input'>
        <div className='input-email'>

     <input placeholder='Your Email'  onChange={(e)=>{setEmail(e.target.value)}}
     value={email}
     />
     <button onClick={handleSubmitFeedback}>Subscribe</button>
        </div>
     <p>Lorem impsum dolor amit</p>
      </div>
      
      </div>
      </div>
      </div>
      <div className='last'>
      <p>Made With <a>❤</a> at Acciojob</p>
      </div>
    </div>
  )
}

export default Footer
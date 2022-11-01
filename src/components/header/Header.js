import React from 'react'
import './Header.css'
import photo from '../assets/headerCSS/photo.png'

function Header() {
  return (
    <div className='header'>

    <div className='container-fluid'>
      <div className='row'>

      <div className='col-1'>
      <h5>SUMMER 2020</h5>
      <h1>NEW COLLECTION</h1>
      <h4>We know how large objects will act, but things on small scale.</h4>
      <div className='cta'>
      <button><p>SHOP NOW</p> </button>
      </div>
      </div>

      <div className='col-2'>
      <div className='hero-cover'>
      <div className='none'>
      <div id='ellipse-1'></div>
      <div id='ellipse-2'></div>
      <div id='ellipse-3'></div>
      <div id='ellipse-5'></div>
      <div id='ellipse-4'></div>
      <div id='photo'></div>
      </div>
      </div>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Header
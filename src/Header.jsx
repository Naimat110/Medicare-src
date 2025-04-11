import React from 'react'
import { Link } from 'react-router-dom'
import './assets/Header.css'

function Header() {
  return (

      <>
      <header>
        <div className='logo'>
            <img src="images/logo.png" alt="" />
            <h2>Medicare</h2>


        </div>
        <ul>
            <li><Link to="" className="link">Home</Link></li>
            <li><Link to="about" className="link">About</Link></li>
            <li><Link to="services" className="link">Services</Link></li>
            <li><Link to="expert" className="link">Our Expert</Link></li>
            <li><Link to="contact" className="link">Contact Us</Link></li>
            
        </ul>
      </header>
      </>
     )
}

export default Header

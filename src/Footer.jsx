import React from 'react'
import { Link } from 'react-router-dom'
import './assets/Footer.css'


function Footer() {
  return (
  <footer>
    <div className="sec">
        <h2>MEDICARE</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo id impedit ad molestiae in perferendis error dolorem dolore, eius qui voluptates reprehenderit adipisci optio consequuntur repudiandae quo unde quos! Adipisci odio accusantium officiis dolorum?</p>
    </div>
    <div className="sec">
        <h2>Active Links</h2>
        <ul>
            <li>
                <Link to="" className="link">Home</Link>
            </li>
            <li>
                <Link to="about" className="link">About Us</Link>
            </li>
            <li>
                <Link to="services" className="link">Services</Link>
            </li>
            <li>
                <Link to="expert" className="link">Our Expert</Link>
            </li>
            <li>
                <Link to="contact" className="link">Contact Us</Link>
            </li>
        </ul>
    </div>
    <div className="sec">
        <h2>Country</h2>
        <ul>
            <li>
                <Link className="link">Pakistan</Link>
            </li>
            <li>
                <Link className="link">India</Link>
            </li>
            <li>
                <Link className="link">Malaysia</Link>
            </li>
            <li>
                <Link className="link">China</Link>
            </li>
            <li>
                <Link className="link">USA</Link>
            </li>
        </ul>
    </div>
    <div className="sec">
        <h2>Contact Info</h2>
        <ul>
            <li>
                <Link className="link">0300-2460735</Link>
            </li>
            <li>
                <Link className="link">naimatullahabbasi5@gmail.com</Link>
            </li>
            <li>
                <Link className="link">Gohar Green City Karachi</Link>
            </li>
            
        </ul>
    </div>
  </footer>
  )
}

export default Footer

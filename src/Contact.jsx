import React from 'react'
import './assets/Contact.css'

function Contact() {
  return (
    <>
    <section className="contactMap">
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8695119605563!2d67.1959259!3d24.8683059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb330aed6e64901%3A0x549ade1e16dbb2c6!2sGohar%20Green%20City%20Bagh%20e%20Ibrahim%20Society%20Shah%20Faisal%20Colony%2C%20Karachi!5e0!3m2!1sen!2s!4v1744385176221!5m2!1sen!2s" width="100%" height="600px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    <section className="contactSection">
      <div className='title'>
        <h3>Submit Your FeedBack</h3>
        <h2>Get In Touch With Us</h2>
        </div>
        <div className="myForm">
          <form>
        <input type="text" placeholder='Input Your Name' />
        <input type="email" placeholder='Input Your Email' />
        <input type="number" placeholder='Input Your Phone Number' />
        <textarea placeholder='Input Your Message / Feedback'></textarea>
        <input type="submit" value="Send Feedback" />
        </form>
        
        </div>
      </section>
    </>
  )
}

export default Contact

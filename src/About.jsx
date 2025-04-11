import React from 'react'
import './assets/About.css'

function About() {
    var teamCards=
    [
        {
            name:'Dr Muhammad Ali',
            image:'doctor.jpg'
        },
        {
            name:'Dr Usama',
            image:'doctor2.jpg'
        },
        {
            name:'Dr Hafsa',
            image:'expert2.jpg'
        },
        {
            name:'Dr Fahad',
             image:'doctor7.jpg'
        }
    ]
  return (
<>
        <section className='aboutBanner'>
        <div className='title'>
        <h3>What We Provide</h3>
        <h2>Our Best Services</h2>
        </div>
        </section>
        <section className="aboutSection">
        <div className="leftSide">
          <h3>Health and Care</h3>
          <h2>We Provide The Best Medical Services</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam beatae debitis aliquam perferendis quasi eum sint ratione suscipit! Eligendi quae nostrum laboriosam autem quidem. Veniam eos perspiciatis repellendus quos, ex necessitatibus libero ipsam neque recusandae dignissimos hic dolores quibusdam quasi similique debitis nisi itaque voluptatem quod velit dolorem molestiae? Esse!</p>
          <button>Read More</button>
        </div>
        <div className="rightSide">
          <img src="images/aboutmission.jpg" alt="" />
        </div>
      </section>
      <section className="aboutSection">
      <div className="rightSide">
          <img src="images/mission.jpg" alt="" />
        </div>
        <div className="leftSide">
          <h3>Our Vision</h3>
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam beatae debitis aliquam perferendis quasi eum sint ratione suscipit! Eligendi quae nostrum laboriosam autem quidem. Veniam eos perspiciatis repellendus quos, ex necessitatibus libero ipsam neque recusandae dignissimos hic dolores quibusdam quasi similique debitis nisi itaque voluptatem quod velit dolorem molestiae? Esse!</p>
          <button>Read More</button>
        </div>
        
      </section>
      <section className="teamSection">
      <div className='title'>
        <h3>Meet Our Team</h3>
        <h2>Our Professional Member</h2>
        </div>
        <div className="teamCard">
            {
            teamCards.map((member)=>
            
            <div className="teamSubCard">
                <img src={`images/${member.image}`} alt="" />
                 <h2>{member.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores commodi voluptas cupiditate quidem aut atque nobis aliquam labore at?</p>
            <div className="socialIcon">
                <i className='fa fa-facebook'></i>
                <i className='fa fa-twitter'></i>
                <i className='fa fa-instagram'></i>
                <i className='fa fa-whatsapp'></i>
                <i className='fa fa-youtube-play'></i>
                </div>
            </div>
            )}
            
        </div>
      </section>
</>
  )
}

export default About

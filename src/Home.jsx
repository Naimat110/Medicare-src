import React from 'react'
import './assets/Home.css'


function Home() {
  var subCard=
  [
    {
      name:"Dentist",
      image:"dentist.jpg"
    },
    {
      name:"Cardiology",
      image:"cardiologist.jpg"
    },
    {
      name:"Radiology",
      image:"radiology.jpg"
    }
    ] 
    var expertCard=
    [
      {
        name:"Dr Hassan",
        specialist:"Eye Specialist",
        degree:"MD (Doctor of Medicine)",
        image:"expert1.jpg"
      },
      {
        name:"Dr Sana",
        specialist:"Child Specialist",
        degree:"MBBS",
        image:"expert4.jpg"
      },
      {
        name:"Dr Arif",
        specialist:"Cardiologist",
        degree:"Diplomate of National Board (DNB)",
        image:"expert3.jpg"
      }
    ]
  
  return (
    
      <>
      <section className='homeBanner'>
        <div className="leftSide">
          <h2>We Provide Best<br/>Medical Services...</h2>
        </div>
        <div className="rightSide">
          <img src="images/doctor3.png" alt="" />
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
          <img src="images/img2.jpg" alt="" />
        </div>
      </section>

      <section className='servicesSection'>
        <div className='title'>
        <h3>What We Provide</h3>
        <h2>Our Best Services</h2>
        </div>
        <div className="servicesCard">
          {
            subCard.map((card)=>
              <div className="subCard">
            <img src={`images/${card.image}`} alt="" />
            <div className="cardDetail">
              <h2>{card.name}</h2>
              </div>
            </div>
            )
          }
        </div>
      </section>
      <section className="expertSection">
      <div className='title'>
        <h3>Qualified Doctors</h3>
        <h2>Our Expert Specialist</h2>
        </div>
        <div className="expertCard">
          
          {
          expertCard.map((expert)=>
            <div className="expertSubCard">
          <img src={`images/${expert.image}`} alt="" />
          <div className="expertSubCardDetail">
            <h2>{expert.name}</h2>
            <h2>{expert.specialist}</h2>
            <h2>{expert.degree}</h2>
          </div>
          </div>

          )}
        
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

export default Home

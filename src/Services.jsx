import React from 'react'
import './assets/services.css'

function Services() {
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
    },
    {
        name:"Orthopedic",
        image:"doctor8.jpg"
      },
      {
        name:"Cancer",
        image:"cancer.jpg"
      },
      {
        name:"MRI",
        image:"mri.jpg"
      },
 
    
    ] 
  return (
    <>
      <section className='servicesBanner'>
        <div className='title'>
        <h3>What We Provide</h3>
        <h2>Our Best Services</h2>
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
    </>
  )
}

export default Services

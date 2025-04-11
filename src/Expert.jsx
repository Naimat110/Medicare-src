import React from 'react'
import './assets/Expert.css'

function Expert() {
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
      },
      {
        name:"Dr Farwa",
        specialist:"Eye Specialist",
        degree:"MD (Doctor of Medicine)",
        image:"doctorr.jpg"
      },
      {
        name:"Dr Fatima",
        specialist:"Child Specialist",
        degree:"MBBS",
        image:"expert2.jpg"
      },
      {
        name:"Dr Hussain",
        specialist:"Cardiologist",
        degree:"Diplomate of National Board (DNB)",
        image:"doctor2.jpg"
      }
    ]
  
  return (
    <>
      <section className='expertBanner'>
        <div className='title'>
        <h3>Our Expert</h3>
        <h2>Meet Our Professionals</h2>
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
    
    </>
  )
}

export default Expert

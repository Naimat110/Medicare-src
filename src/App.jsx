import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import Expert from './Expert'
import Contact from './Contact'

function App() {
  return (
    <>
      <Header/>
     <Routes>
      { <Route path='' element={<Home/>}/> }
      { <Route path='about' element={<About/>}/> }
      { <Route path='services' element={<Services/>}/> }
      { <Route path='expert' element={<Expert/>}/> }
      { <Route path='contact' element={<Contact/>}/> }
     </Routes>
     <Footer/>
    </>
  )
}

export default App

import React from 'react'
import '../App.css'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'


const homePage = () => {
  return (
    <div>
        <h1 className="App">
         <NavBar/>
        <Hero/>
        <Categories/>
        <Contact/>
        <Footer/>
        </h1>   
    </div>
  )
}

export default homePage
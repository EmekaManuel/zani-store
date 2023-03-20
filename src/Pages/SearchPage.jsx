import React from 'react'
import '../App.css'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SearchHero from '../Components/SearchHero'

const searchPage = () => {
  return (
    <div>
        <h1 className="App">
         <NavBar/>
        <SearchHero/>
        <Categories/>
        <Contact/>
        <Footer/>
        </h1>   
    </div>
  )
}

export default searchPage
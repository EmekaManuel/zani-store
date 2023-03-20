import React from 'react'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import NewsletterHero from '../Components/NewsletterHero'

const Newsletter = () => {
  return (
    <div>
    <h1 className="App">
      <NavBar />
      <NewsletterHero />
      <Categories />
      <Contact />
      <Footer />
    </h1>
  </div>
  )
}

export default Newsletter
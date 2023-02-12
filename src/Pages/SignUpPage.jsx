import React from 'react'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import SignUpHero from '../Components/SignUpHero'

const signUpPage = () => {
  return (
    <div>
    <h1 className="App">
      <NavBar />
      <SignUpHero />
      <Categories />
      <Contact />
      <Footer />
    </h1>
  </div>

    )
}

export default signUpPage
import React from "react";
import Categories from '../Components/Categories'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import LoginHero from '../Components/LoginHero'

const loginPage = () => {
  return (
    <div>
      <h1 className="App">
        <NavBar />
        <LoginHero />
        <Categories />
        <Contact />
        <Footer />
      </h1>
    </div>
  );
};

export default loginPage;

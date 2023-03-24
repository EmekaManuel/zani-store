import { React } from "react";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/cartPage";
import LoginPage from "./Pages/LoginPage";
import Search from "./Pages/searchPage";
import ForgottenPassword from "./Pages/ForgotPassword";
import SignUp from "./Pages/SignUpPage";
import Newsletter from "./Pages/Newsletter";
import Shop from "./Pages/Shop";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from "./Pages/Checkout";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/forgottenPassword" element={<ForgottenPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/checkout" element={<Checkout />} />
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

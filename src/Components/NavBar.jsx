import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";


const NavBar = () => {

  
//redux toolkit
const totalProducts = useSelector((state) => state.cartTotalProducts);



  const [showNav, setShowNav] = useState(false);
  const [mainNavItems, setMainNavItems] = useState(false);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }

    const updateMedia = () => {
      if (window.innerWidth >= 768) {
        setShowCart(true);
      } else {
        setShowCart(false);
      }
    };

    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleNav = () => {
    setShowNav(!showNav);
    setMainNavItems(!mainNavItems);
  };

  //hello world

  return (
    <nav className="flex justify-between items-center px-4 h-20">
      {/* mobile menu navigation */}

      <div onClick={handleNav} className="md:hidden z-10">
        {showNav ? (
          <AiOutlineClose size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      <div
        onClick={handleNav}
        className={
          showNav
            ? "absolute z-10 left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <div className="absolute  right-5 top-5">
          <img src={Logo} alt="zani-stores" />
        </div>

        <ul className="mt-10">
          <li className="border-b-2">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="border-b-2">brand</li>
          <li className="border-b-2">saved</li>
          <li className="border-b-2">bundles</li>

          <div className="flex flex-col ">
            <button className=" p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded my-4">
              account
            </button>
            <button className=" p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded">
              search
            </button>
          </div>

          <div className="flex justify-between mt-6">
            <FaFacebook size={20} className="icon" />
            <FaTwitter size={20} className="icon" />
            <FaInstagram size={20} className="icon" />
            <FaYoutube size={20} className="icon" />
          </div>
        </ul>
      </div>

      {/* /*************** end of mobile menu nav ********************/}

      <ul className="hidden md:flex">
        <li>
          {" "}
          <Link to="/shop">Shop</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/brand">Brand</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/saved">Saved</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/bundles">Bundles</Link>{" "}
        </li>
      </ul>

      <div className="flex px-auto">
        <Link to="/">
          <img
            className={mainNavItems ? "hidden" : "block"}
            src={Logo}
            alt=""
          />
        </Link>
      </div>

      <ul className="flex">
        {showCart ? (
          <>
            <li className="">
              <Link to="/login">account</Link>
            </li>

            <li className="">search</li>
            <li className="flex items-center justify-center gap-x-2">
              <p> <Link to="/cart">  <BsCartFill />  </Link> </p>
              <p>{totalProducts}</p> 
            </li>
          </>
        ) : (
          <>
            <li className="flex items-center justify-center gap-x-2">
              <p> <Link to="/cart">  <BsCartFill />  </Link> </p>
              <p>{totalProducts}</p> 
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;

import React from "react";
import "./NavBar.css";
import loginSvg from "../assets/navbarSvg/loginSvg.svg";
import searchSvg from "../assets/navbarSvg/searchSvg.svg";
import cartSvg from "../assets/navbarSvg/cartSvg.svg";
import likesSvg from "../assets/navbarSvg/likesSvg.svg";
import {useSelector} from 'react-redux'

function NavBar() {
  const cartCount = useSelector(state => state.cartCount)
  return (
    <div className="navbar-light">
      <div className="navbar-brand">
        <h3>AccioJob</h3>
      </div>
      <div className="navbar-collapse">
        <div className="navbar-1">
          <a id="home">Home</a>
          <a id="shop"><p>Shop</p> </a>
          <a id="about">About</a>
          <a id="blog">Blog</a>
          <a id="contact">Contact</a>
          <a id="pages">Pages</a>
        </div>
        <div className="navbar-2">
          <button id="login_svg">
            <img src={loginSvg} />
            <p>Login / Register</p>           
          </button>
          <button id="seach_svg">
            <img src={searchSvg} />
          </button>
          <button id="cart_svg">
            <img src={cartSvg} />
            <p>{cartCount > 0 ? cartCount : '0'}</p>
          </button>
          <button id="likes_svg">
            <img src={likesSvg} />
            <p>0</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { Link

 } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./Searchbar/Searchbar";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <header className="service-page-navbar">
      <div className="services-navbar">
        <div className="service-logo">ZAP-Services</div>
          <div>
            <SearchBar />
          </div>
        <div className="service-nav-icons">
          <span className="notification">
          <i className="fa-regular fa-bell"></i>
        </span>
        <button className="signup">SIGN UP</button>
        <Link
          to="/search-booking/"
          
          style={{ textDecoration: 'none' }}
        ><button className="login">LOGIN</button></Link>
        
      </div>
      </div>
    </header>
  );
};

export default Navbar;

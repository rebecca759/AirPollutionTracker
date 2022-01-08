import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav style={{padding: "2%" }} className="bg-nav navbar navbar-expand-lg">
      <a style={{ fontSize: "30px", fontWeight: "bold" ,color: "white", marginLeft: "5%" }} className="navbar-brand" href="#">ASTRIGER</a>
        <div className="Container  ml-auto">
        <ul className="nav justify-content-center">
          <li className="nav-item">
          <Link to="/" className="sign-nav nav-link active mr-3">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/Asthma" className="sign-nav nav-link mr-3">Atsma</Link>
          </li>
          <li className="nav-item">
          <Link to="/Air Pollution" className="sign-nav nav-link mr-3">Air Pollution</Link>
          </li>
          <li className="nav-item">
          <Link to="/map" className="sign-nav nav-link mr-3">Distribution Map</Link>
          </li>
          {/* <li className="nav-item">
          <Link to="/signin" className="sign-nav nav-link mr-5">About</Link>
          </li> */}
        </ul>
        </div>
      </nav> 

      
    </>
  );
}

export default Navbar;




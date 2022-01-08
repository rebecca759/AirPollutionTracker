import React,{useState} from 'react';
import './Footer.css';
// import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <>
 <div style={{ padding:"5%"}} className=" footer">
    <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xs-12 about-company">
                    <h2> ASTRIGER</h2>
                    <p className="pr-5 " id="parah"> It is a place where users can get an accurate information regarding the ditribution 
                    of common astma triggers. Users can get the detailed information from all over the world through our distribution map.</p>
              </div>
              <div className="col-lg-3 col-xs-12">
                    <h4 className="mt-lg-0 mt-sm-3">Follow Us</h4>
                    <p className="pt-2">
                           <a href="#"><i className="fab fa-instagram mr-2 icons rounded-circle"></i></a>
                            <a href="#"><i className="fab fa-facebook mr-2 icons rounded-circle"></i></a>
                            <a href="#"><i className="fab fa-linkedin mr-2 icons rounded-circle"></i></a> 
                    </p>
                    <p className=" mt-3"><small>© 2021. All Rights Reserved.</small></p>
              </div>
              <div className="col-lg-4 col-xs-12 location pl-5">
                    <h4 className="mt-lg-0 mt-sm-4">Contact Info</h4>
                    <p className="mb-0"><i className="fa fa-envelope-o mr-3 icons-2 mb-3"></i>astriger@gmail.com</p>
                    <p className="mb-0"><i className="fa fa-phone mr-3 icons-2"></i>(+251) 984-2022</p>
              </div>
              </div>
    </div>
    </div>
    </>
  );
}

export default Footer;
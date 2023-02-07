import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  function navbartoggle(){
    let x = document.getElementsByClassName("navbar");
   if(x[0].classList.contains("navbar-mobile")){
       x[0].classList.remove("navbar-mobile");
   }else{
       x[0].classList.add("navbar-mobile");
   }
    return true;
}
    return ( 
      <header id="header" className="header-top">
      <div className="container">
        <h1><Link className="nav-link" to="/">Sneha Govindarajan</Link></h1>
        {/* <h1><a href="index.html">Sneha Govindarajan</a></h1> */}
       
     <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
  
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/skills">Skills</Link></li>
            <li><Link className="nav-link" to="/careerPath">Career Path</Link></li>
            {/* <li><Link className="nav-link" to="/projects">Projects</Link></li> */}
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><a href="/assets/resume/SnehaGovindarajan.pdf">Resume</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={navbartoggle}></i>
        </nav>
  
        <div className="social-links">
          <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
  
      </div>
    </header>
    )
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';

function Home(){


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
      <header id="header" className="">
        <div className="container">
          <h1>
            <a href="#">Sneha Govindarajan</a>
          </h1>
          <div className="typing-container">
            <div className="container">
              <div className="typewriter">I'm a Full Stack Developer</div>
            </div>
          </div>
          {/* <div className="dynamic-test">
        <div className="transcontainer">
         <div className="static-txt">I'm</div>
           <ul className="dynamic-txt">
             <li><span>a Full Stack Developer</span></li>
             <li><span>a Front end Developer</span></li>
           </ul>
        </div>
      </div> */}
          {/* <h2>I'm a passionate <span>Software Engineer</span> from New York</h2> */}
          {/* <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></p> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/careerPath">
                  Career Path
                </Link>
              </li>
              {/* <li><Link className="nav-link" to="/projects">Projects</Link></li> */}
              <li>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={navbartoggle}
            ></i>
          </nav>

          <div className="social-links">
            <a href="tel:+1-6174809451" className="telephone">
              <i className="bi bi-telephone"></i>
            </a>
            <a href="https://github.com/govindarajansn" className="github">
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://instagram.com/sne_afu?igshid=Zjc2ZTc4Nzk="
              className="instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-govindarajan/"
              className="linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    );
}

export default Home;
import React from 'react';
import Header from './Header.js'

function Contact(){
    return(
<div>
<Header/>
  <section id="contact" className="contact section-show">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div className="row mt-2">

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-map"></i>
            <h3>My Address</h3>
            <p>124 Calumet street, Boston, MA, 02120</p>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-share-alt"></i>
            <h3>Social Profiles</h3>
            <div className="social-links">
            <a href="https://github.com/govindarajansn" className="github"><i className="bi bi-github"></i></a>
            <a href="https://instagram.com/sne_afu?igshid=Zjc2ZTc4Nzk=" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sneha-govindarajan/" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-envelope"></i>
            <h3>Email Me</h3>
            <a href="mailto:govindarajan.sn@northeastern.edu" style={{color:"#fff"}}>govindarajan.sn@northeastern.edu</a>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-phone-call"></i>
            <h3>Call Me</h3>
            <a href="tel:+1-6174809451" style={{color:"#fff"}}>+1 617 480 9451</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
    )
}

export default Contact;
import React from 'react';
import Header from './Header.js'

function About() {
  return (
    <div>
      <Header />
      <section id="about" className="about">
        <div className="about-me container">

          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row about-main">
            <div className="col-lg-4 abt-img" data-aos="fade-right">
              <div classname="aboutImg">
                <div className="div-img-bg">
                  <div className="about-img"> <img src="assets/img/snehadp.png" className="img-responsive" alt="me" /></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Full Stack Developer</h3>
              <p className="fst-italic">
                Tech enthusiast, Force-Multiplier, People developer and Value creator
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Boston, MA, USA</span></li>
                    {/* <li><i className="bi bi-chevron-right"></i> <strong>E-mail:</strong> <span>govindarajan.sn@northeastern.edu</span></li> */}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Specialization:</strong> <span>Information Systems</span></li>
                    <li><div className="downloadCV"><a href="/assets/resume/SnehaGovindarajan.pdf" className="aTag" download={true} rel="noreferrer" target="_blank">Download CV</a></div></li>
                  </ul>
                </div>
              </div>
              <p> Hello there, I'm so happy you are here! </p>
              <p> Hi there! I'm Sneha, a tech enthusiast and graduate student pursuing my Master's in Information Systems in the vibrant city of Boston. My passion lies in crafting cutting-edge web applications and constantly exploring the latest technological advancements.</p>
              <p> When I'm not immersed in coding or brainstorming new ideas, you'll find me dancing my heart out, cuddling with my furry friends, or binge-watching the latest series on Netflix.</p>
              <p>I thrive on collaborating with dynamic individuals and teams who share my excitement for creating extraordinary digital experiences. Let's connect and build something amazing together!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
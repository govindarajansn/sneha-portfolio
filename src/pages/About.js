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
                A Product-focused full stack developer, having two years of professional experience. I specialise in helping products grow based on user metrics. In this dynamic digital environment, I'm learning and growing to be a force behind the expansion and success of an organization.
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
              <p>
                I'm a Full Stack Developer with two years of work experience. I have extensive experience creating and managing web applications using a variety of technologies. </p>
              <p>On the front-end, I am proficient in HTML, CSS, JavaScript, SCSS, TypeScript and jQuery. I have experience using popular front-end frameworks such as Bootstrap, Foundation, Material-UI and Angular Material. I also have experience working with React.js, Next.js and Angular.</p>

              <p>On the back-end, I have experience working with Node.js and Express. I have a solid understanding of database management and have experience working with MySQL, MongoDB, and PostgreSQL. I also have experience with server-side rendering and API development.</p>

              <p>I have experience working with Git and have a solid understanding of best practices for version control. I am also familiar with deploying and maintaining applications on various hosting platforms like AWS.</p>

              <p> I am a proactive and detail-oriented developer who is always eager to learn new technologies and improve my skills. I have a strong ability to work both independently and collaboratively, and I am able to deliver high-quality, functional and user-friendly applications. I have a passion for solving problems and creating efficient solutions.

              </p>
            </div>
          </div>

        </div>


      </section>
    </div>
  )
}

export default About;
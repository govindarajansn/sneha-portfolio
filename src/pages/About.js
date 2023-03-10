import React, { Fragment } from 'react';
import Header from './Header.js'

function About(){
    return(
    <div>
        <Header/>
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
            <div className="about-img"> <img src="assets/img/snehadp.png" className="img-responsive" alt="me"/></div>
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
                <li><div className="downloadCV"><a href="/assets/resume/SnehaGovindarajan.pdf" className="aTag" download={true}>Download CV</a></div></li>
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

   

    {/* <!-- ======= Skills  ======= -->
    <div className="skills container">

      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="row skills-content">

        <div className="col-lg-6">

          <div className="progress">
            <span className="skill">HTML <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">CSS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">JavaScript <i className="val">75%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div className="col-lg-6">

          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Photoshop <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div><!-- End Skills --> */}
{/* 
    <!-- ======= Interests ======= -->
    <div className="interests container">

      <div className="section-title">
        <h2>Interests</h2>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line" style="color: #ffbb2c;"></i>
            <h3>Lorem Ipsum</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line" style="color: #5578ff;"></i>
            <h3>Dolor Sitema</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-calendar-todo-line" style="color: #e80368;"></i>
            <h3>Sed perspiciatis</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className="ri-paint-brush-line" style="color: #e361ff;"></i>
            <h3>Magni Dolores</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-database-2-line" style="color: #47aeff;"></i>
            <h3>Nemo Enim</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-gradienter-line" style="color: #ffa76e;"></i>
            <h3>Eiusmod Tempor</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-file-list-3-line" style="color: #11dbcf;"></i>
            <h3>Midela Teren</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-price-tag-2-line" style="color: #4233ff;"></i>
            <h3>Pira Neve</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-anchor-line" style="color: #b2904f;"></i>
            <h3>Dirada Pack</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-disc-line" style="color: #b20969;"></i>
            <h3>Moton Ideal</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-base-station-line" style="color: #ff5828;"></i>
            <h3>Verdo Park</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-fingerprint-line" style="color: #29cc61;"></i>
            <h3>Flavor Nivelanda</h3>
          </div>
        </div>
      </div>

    </div><!-- End Interests --> */}


  </section>
  </div>
    )
}

export default About;
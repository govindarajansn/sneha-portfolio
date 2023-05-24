import React from 'react';
import Header from './Header.js';

function Projects() {

  return (
    <div>
      <Header />
      <section id="portfolio" className="portfolio">
        <div className="container">

          <div className="section-title">
            <h2>Portfolio</h2>
            <p>My Works</p>
          </div>


          <div className="row portfolio-container">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/car-thumbnail.png" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Customizable Car</h4>
                  <p>Customize your car using three.js and react</p>
                  <div className="portfolio-links">
                    <a href="https://car-model-threejs.vercel.app/" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/cloud.jpeg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Cloud Deployment</h4>
                  <p>AWS CI/CD Web App with React and Node.js	</p>
                  <div className="portfolio-links">
                    <a href="https://github.com/csye-snehagovindarajan/webapp" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/music.jpeg" className="img-fluid" alt="" style={{ height: '230px' }} />
                <div className="portfolio-info">
                  <h4>Happify</h4>
                  <p>Music app using spotify API</p>
                  <div className="portfolio-links">
                    <a href="https://github.com/govindarajansn/Happify" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/activepay-thumbnail.jpeg" className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Active Pay</h4>
                  <p>Re-paying cred card bill and getting return rewards</p>
                  <div className="portfolio-links">
                    <a href="https://github.com/neu-mis-info6150-fall-2022/final-project-quadsquad" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/tsp.jpeg" className="img-fluid" alt="" style={{ height: '225px' }} />
                <div className="portfolio-info">
                  <h4>Travelling Salesman Problem</h4>
                  <p>Here's the Optimized Solution for TSP</p>
                  <div className="portfolio-links">
                    <a href="https://github.com/govindarajansn/FinalProject-INFO6205" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/book-store.jpeg" className="img-fluid" alt="" style={{ height: '224px' }} />
                <div className="portfolio-info">
                  <h4>Online Book Store</h4>
                  <p>Fetch the Books using isbn, title, author from google books API</p>
                  <div className="portfolio-links">
                    {/* <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a> */}
                    <a href="https://github.com/govindarajansn/ScanbuyApp" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </section>
    </div>
  )
}

export default Projects;
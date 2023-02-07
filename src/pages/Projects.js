import React from 'react';
import Header from './Header.js';

function Projects(){
    return(
    <div>
     <Header/>
    <section id="projects" className="portfolio section-show">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      <div className="row portfolio-container" style={{position: 'relative', height: '999px'}}>

        <div className="col-lg-4 col-md-6 portfolio-item" style={{position: 'relative', left: '0px; top: 0px'}}>
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item" style={{position: 'relative', left: '428px; top: 0px'}}>
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item" style={{position: 'relative',left: '856px; top: 0px'}}>
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item" style={{position: 'relative', left: '0px; top: 333px'}}>
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item" style={{position: 'relative', left: '428px; top: 333px'}}>
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item" style={{position: 'relative', left: '856px; top: 333px'}}>
          <div className="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="#" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
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
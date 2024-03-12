import React from "react";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src="./assets/images/star-2-2.png" alt="Star" /> All Projects{" "}
          <img src="./assets/images/star-2-2.png" alt="Star" />
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div data-aos="zoom-in">
              <div className="project-item shadow-box">
                <Link className="overlay-link" to="/projects"></Link>
                <div className="project-img">
                  <img
                    src="./assets/images/projects1.jpeg"
                    alt="Project"
                    width={330}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project-info">
                    <p>WEB DESIGNING</p>
                    <h1>E Commerce website</h1>
                  </div>
                  <Link to="/projects" className="project-btn">
                    <img src="./assets/images/icon-2.svg" alt="Button" />
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in">
              <div className="project-item shadow-box">
                <Link className="overlay-link" to="/projects"></Link>
                <div className="project-img">
                  <img src="./assets/images/projects2.jpg" alt="Project" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project-info">
                    <p>WEBSITE</p>
                    <h1>Women Clothing Store</h1>
                  </div>
                  <Link to="/projects" className="project-btn">
                    <img src="./assets/images/icon-2.svg" alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="section-heading" data-aos="fade-up">
              <img src="./assets/images/star-2-2.png" alt="Star" /> All Projects{" "}
              <img src="./assets/images/star-2-2.png" alt="Star" />
            </h1>

            <div className="d-flex align-items-start gap-24">
              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/projects"></Link>
                  <div className="project-img">
                    <img
                      src="./assets/images/projects3.jpg"
                      alt="Project"
                      height={250}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>LANDING PAGE</p>
                      <h1>Photography</h1>
                    </div>
                    <Link to="/projects" className="project-btn">
                      <img src="./assets/images/icon-2.svg" alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/projects"></Link>
                  <div className="project-img">
                    <img src="./assets/images/projecst4.png" alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>CRUD APPLICATION</p>
                      <h1>TODO App</h1>
                    </div>
                    <Link to="/projects" className="project-btn">
                      <img src="./assets/images/icon-2.svg" alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-start gap-24">
              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/projects"></Link>
                  <div className="project-img">
                    <img src="./assets/images/projects5.jpg" alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>REACT.JS WEBSITE</p>
                      <h1>Amazon Clone</h1>
                    </div>
                    <Link to="/projects" className="project-btn">
                      <img src="./assets/images/icon-2.svg" alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/projects"></Link>
                  <div className="project-img">
                    <img src="./assets/images/projects6.png" alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>WEBSITE</p>
                      <h1>Net Run Rate Calculator</h1>
                    </div>
                    <Link to="/projects" className="project-btn">
                      <img src="./assets/images/icon-2.svg" alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;

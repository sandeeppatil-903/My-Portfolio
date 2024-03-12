import React from "react";
import { Link } from "react-router-dom";

function Certificate() {
  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src="%PUBLIC_URL%/assets/images/star-2-2.png" alt="Star" />{" "}
          Certifications{" "}
          <img src="%PUBLIC_URL%/assets/images/star-2-2.png" alt="Star" />
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div data-aos="zoom-in">
              <div className="project-item shadow-box">
                <Link className="overlay-link" to="/certificate"></Link>
                <div className="project-img">
                  <img
                    src="%PUBLIC_URL%/assets/images/certificate1.png"
                    alt="Project"
                    width={330}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project-info">
                    <p>Certificate</p>
                    <h1>Web Development</h1>
                  </div>
                  <Link to="/certificate" className="project-btn">
                    <img
                      src="%PUBLIC_URL%/assets/images/icon-2.svg"
                      alt="Button"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in">
              <div className="project-item shadow-box">
                <Link className="overlay-link" to="/certificate"></Link>
                <div className="project-img">
                  <img
                    src="%PUBLIC_URL%/assets/images/certificate2.png"
                    alt="Project"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project-info">
                    <p>Certificate</p>
                    <h1>Internship</h1>
                  </div>
                  <Link to="/certificate" className="project-btn">
                    <img
                      src="%PUBLIC_URL%/assets/images/icon-2.svg"
                      alt="Button"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="section-heading" data-aos="fade-up">
              <img src="%PUBLIC_URL%/assets/images/star-2-2.png" alt="Star" />{" "}
              Certifications
              <img src="%PUBLIC_URL%/assets/images/star-2-2.png" alt="Star" />
            </h1>

            <div className="d-flex align-items-start gap-24">
              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/certificate"></Link>
                  <div className="project-img">
                    <img
                      src="src/assets/images/certificate3.png"
                      alt="Project"
                      height={250}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>Certificate</p>
                      <h1>Web Development</h1>
                    </div>
                    <Link to="/certificate" className="project-btn">
                      <img
                        src="%PUBLIC_URL%/assets/images/icon-2.svg"
                        alt="Button"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/certificate"></Link>
                  <div className="project-img">
                    <img
                      src="%PUBLIC_URL%/assets/images/certificate4.png"
                      alt="Project"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>Certificate</p>
                      <h1>Python Programming</h1>
                    </div>
                    <Link to="/certificate" className="project-btn">
                      <img
                        src="%PUBLIC_URL%/assets/images/icon-2.svg"
                        alt="Button"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-start gap-24">
              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/certificate"></Link>
                  <div className="project-img">
                    <img
                      src="%PUBLIC_URL%/assets/images/certificate5.jpg"
                      alt="Project"
                      width={800}
                      height={350}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>Certificate</p>
                      <h1>Internship</h1>
                    </div>
                    <Link to="/certificate" className="project-btn">
                      <img
                        src="%PUBLIC_URL%/assets/images/icon-2.svg"
                        alt="Button"
                      />
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
}

export default Certificate;

import React from "react";
import { Link } from "react-router-dom";
import certificate from "../assets/images/certificate.png";
import certificate2 from "../assets/images/certificate2.png";
import certificate3 from "../assets/images/certificate3.png";
import certificate4 from "../assets/images/certificate4.png";
import certificate5 from "../assets/images/certificate5.jpg";
import star2 from "../assets/images/star-2-2.png";
import icon2 from "../assets/images/icon-2.svg";

function Certificate() {
  return (
    <section className="projects-area">
      <div className="container">
        <h1 className="section-heading" data-aos="fade-up">
          <img src={star2} alt="Star" /> Certifications{" "}
          <img src={star2} alt="Star" />
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div data-aos="zoom-in">
              <div className="project-item shadow-box">
                <Link className="overlay-link" to="/certificate"></Link>
                <div className="project-img">
                  <img src={certificate} alt="Project" width={330} />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project-info">
                    <p>Certificate</p>
                    <h1>Web Development</h1>
                  </div>
                  <Link to="/certificate" className="project-btn">
                    <img src={icon2} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="zoom-in">
              <div className="project-item shadow-box">
                <Link className="overlay-link" to="/certificate"></Link>
                <div className="project-img">
                  <img src={certificate2} alt="Project" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="project-info">
                    <p>Certificate</p>
                    <h1>Internship</h1>
                  </div>
                  <Link to="/certificate" className="project-btn">
                    <img src={icon2} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <h1 className="section-heading" data-aos="fade-up">
              <img src={star2} alt="Star" /> Certifications
              <img src={star2} alt="Star" />
            </h1>

            <div className="d-flex align-items-start gap-24">
              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/certificate"></Link>
                  <div className="project-img">
                    <img src={certificate3} alt="Project" height={250} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>Certificate</p>
                      <h1>Web Development</h1>
                    </div>
                    <Link to="/certificate" className="project-btn">
                      <img src={icon2} alt="Button" />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="project-item shadow-box">
                  <Link className="overlay-link" to="/certificate"></Link>
                  <div className="project-img">
                    <img src={certificate4} alt="Project" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                      <p>Certificate</p>
                      <h1>Python Programming</h1>
                    </div>
                    <Link to="/certificate" className="project-btn">
                      <img src={icon2} alt="Button" />
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
                      src={certificate5}
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
                      <img src={icon2} alt="Button" />
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

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-me-box shadow-box">
              <Link className="overlay-link" to="/about"></Link>
              <div className="img-box">
                <img
                  src="/src/assets/images/profile-2.jpeg"
                  alt="About Me"
                />
              </div>
              <div className="infos">
                <h4>A WEB DESIGNER</h4>
                <h1>Sandeep Patil.</h1>
                <p>I am a Web Designer based in India.</p>
                <NavLink to="./about.html" className="about-btn">
                  <img
                    src="src/assets/images/images/icon-2.svg"
                    alt="Button"
                  />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-credentials-wrap">
              <div data-aos="zoom-in">
                <div className="banner shadow-box">
                  <div className="marquee">
                    <div>
                      <span>
                        LATEST WORK AND <b>FEATURED</b>{" "}
                        <img
                          src="src/assets/images/images/star1.svg"
                          alt="Star"
                        />{" "}
                        LATEST WORK AND <b>FEATURED</b>{" "}
                        <img
                          src="src/assets/images/images/star1.svg"
                          alt="Star"
                        />{" "}
                        LATEST WORK AND <b>FEATURED</b>{" "}
                        <img
                          src="src/assets/images/images/star1.svg"
                          alt="Star"
                        />{" "}
                        LATEST WORK AND <b>FEATURED</b> LATEST WORK AND{" "}
                        <img
                          src="src/assets/images/images/star1.svg"
                          alt="Star"
                        />{" "}
                        LATEST WORK AND <b>FEATURED</b> LATEST WORK AND{" "}
                        <img
                          src="src/assets/images/images/star1.svg"
                          alt="Star"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gx-row d-flex gap-24">
                <div data-aos="zoom-in">
                  <div className="about-project-box info-box shadow-box h-full">
                    <Link className="overlay-link" to="/projects"></Link>
                    <img
                      src="src/assets/images/images/Header-project-image.jpg"
                      alt="My Projects"
                    />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>SHOWCASE</h4>
                        <h1>Projects</h1>
                      </div>

                      <Link to="/" className="about-btn">
                        <img
                          src="./assets/images/icon-2.svg"
                          alt="Button"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in">
                  <div className="about-crenditials-box info-box shadow-box h-full">
                    <Link className="overlay-link" to="/certificate"></Link>
                    <img
                      src="./assets/images/images/certificate.png"
                      alt="Sign"
                      height={145}
                    />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>My</h4>
                        <h1>Certifications</h1>
                      </div>

                      <Link to="/certificate" className="about-btn">
                        <img
                          src="./assets/images/images/icon-2.svg"
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

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="blog-service-profile-wrap d-flex gap-24">
              <div data-aos="zoom-in">
                <div className="about-blog-box info-box shadow-box h-full">
                  <Link href="./blog.html" className="overlay-link"></Link>
                  <img
                    src="./assets/images/images/gfonts.png"
                    alt="GFonts"
                  />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>Blog</h4>
                      <h1>GFonts</h1>
                    </div>

                    <Link href="./blog.html" className="about-btn">
                      <img
                        src="./assets/images/images/icon-2.svg"
                        alt="Button"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="about-services-box info-box shadow-box h-full">
                  <Link href="./service.html" className="overlay-link"></Link>
                  <div className="icon-boxes">
                    <i
                      className="fa-brands fa-react"
                      style={{ color: "#ffffff" }}
                    >
                      <span
                        className={onmousemove ? "icon-name" : "icon-name1"}
                      >
                        React.js
                      </span>
                    </i>

                    <i
                      className="fa-brands fa-node"
                      style={{ color: "#ffffff" }}
                    >
                      {" "}
                      <span className="icon-name1">Node.js</span>
                    </i>

                    <i
                      className="fa-brands fa-wordpress"
                      style={{ color: "#ffffff" }}
                    >
                      <span className="icon-name1">WordPress</span>
                    </i>

                    <i
                      className="fa-brands fa-square-js"
                      style={{ color: "#ffffff" }}
                    >
                      <span className="icon-name1">Javascript</span>
                    </i>

                    <i
                      className="fa-solid fa-laptop-code"
                      style={{ color: "#ffffff" }}
                    >
                      <span className="icon-name1">
                        {" "}
                        Web
                        <span className="icon-name1" style={{ top: "10px" }}>
                          Development
                        </span>
                      </span>
                    </i>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>specialization</h4>
                      <h1>Skills</h1>
                    </div>

                    <Link href="./service.html" className="about-btn">
                      <img
                        src="%PUBLIC_URL%/assets/images/images/icon-2.svg"
                        alt="Button"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in">
                <div className="about-profile-box info-box shadow-box h-full">
                  <div className="inner-profile-icons shadow-box">
                    <Link
                      to="https://www.linkedin.com/in/sandeep-patil-5702a8223"
                      target="_blank"
                    >
                      <i className="iconoir-linkedin"></i>
                      <span className="icon-name">Linkedin</span>
                    </Link>
                    <Link
                      to="https://github.com/sandeeppatil-903"
                      target="_blank"
                    >
                      <i className="iconoir-github"></i>
                      <span className="icon-name">GitHub</span>
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>Connect with me</h4>
                      <h1>Profiles</h1>
                    </div>

                    <Link href="./contact.html" className="about-btn">
                      <img
                        src="%PUBLIC_URL%/assets/images/images/icon-2.svg"
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

      <div className="row mt-24">
        <div className="col-md-6" data-aos="zoom-in">
          <div className="about-client-box info-box shadow-box">
            <div className="clients d-flex align-items-start gap-24 justify-content-center">
              <div className="client-item">
                <h1>03</h1>
                <p>
                  Years <br />
                  Experience
                </p>
              </div>

              <div className="client-item">
                <h1>+25</h1>
                <p>
                  CLIENTS <br />
                  WORLDWIDE
                </p>
              </div>

              <div className="client-item">
                <h1>+110</h1>
                <p>
                  Total <br />
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="zoom-in">
          <div className="about-contact-box info-box shadow-box">
            <Link className="overlay-link" to="/contact"></Link>
            <img
              src="%PUBLIC_URL%/assets/images/images/icon2-2.png"
              alt="Icon"
              className="star-icon"
            />
            <h1>
              Let's <br />
              work <span>together.</span>
            </h1>
            <Link to="/projects" className="about-btn">
              <img
                src="%PUBLIC_URL%/assets/images/images/icon-2.svg"
                alt="Button"
              />
            </Link>
          </div>

          <div />
        </div>
      </div>
    </section>
  );
};
export default Home;

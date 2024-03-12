import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const content =
    "Highly motivated and detail-oriented computer science and engineering graduate. With a strong foundation in programming languages like JavaScript as well as hands-on experience in web development technologies such as HTML, CSS, React.js, and Node.js, MongoDB, Express.js, I am eager to apply my technical skills and knowledge to contribute to a dynamic team and gain practical experience in the field. I am committed to continuous learning and staying updated with the latest industry trends to deliver innovative and efficient solutions for the benefit of the organization.";

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const displayContent = isExpanded ? content : content.slice(0, 380) + "...";

  return (
    <section className="about-area">
      <div className="container">
        <div className="d-flex about-me-wrap align-items-start gap-24">
          <div data-aos="zoom-in">
            <div className="about-image-box shadow-box">
              <div className="image-inner">
                <img src=".%PUBLIC_URL%/assets/images/me2.png" alt="About Me" />
              </div>
            </div>
          </div>

          <div className="about-details" data-aos="zoom-in">
            <h1 className="section-heading" data-aos="fade-up">
              <img src=".%PUBLIC_URL%/assets/images/star-2-2.png" alt="Star" />{" "}
              Self-summary{" "}
              <img src=".%PUBLIC_URL%/assets/images/star-2-2.png" alt="Star" />
            </h1>
            <div className="about-details-inner shadow-box">
              <img src="%PUBLIC_URL%/assets/images/icon2-2.png" alt="Star" />
              <h1>Sandeep Patil</h1>
              <p>
                {displayContent}
                {!isExpanded && (
                  <span className="read-more" onClick={toggleContent}>
                    Read More
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-edc-exp about-experience shadow-box">
              <h3>EDUCATION</h3>

              <ul>
                <li>
                  <p className="date">2018 - 2022</p>
                  <h2>
                    Maratha Mandal’s Engineering College{" "}
                    <span className="type">
                      <i>–Belgaum, Karnataka</i>
                    </span>
                  </h2>
                  <p className="type">
                    Bachelor of Engineering in Computer Science and Engineering
                    field
                  </p>
                </li>
                <li>
                  <p className="date">2016 - 2018</p>
                  <h2>
                    Rajalakhamangouda PU College{" "}
                    <span className="type">
                      <i>–Belgaum, Karnataka</i>
                    </span>
                  </h2>
                  <p className="type">PUC/12th in Science</p>
                </li>
                <li>
                  <p className="date">2006 - 2016</p>
                  <h2>
                    Benson’ s English Medium High School{" "}
                    <span className="type">
                      <i>–Belgaum, Karnataka</i>
                    </span>
                  </h2>
                  <p className="type">SSLC/10th</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6" data-aos="zoom-in">
            <div className="about-edc-exp about-education shadow-box">
              <h3>COURSE and INTERNSHIPS</h3>

              <ul>
                <li>
                  <p className="date">Sep2021 - Nov2021</p>
                  <h2>
                    Letzzbuild Edutech Solutions LLP{" "}
                    <span className="type">
                      <i>–Belgaum, Karnataka</i>
                    </span>
                  </h2>
                  <p className="type">
                    Full Stack Developer Inter- React.js and Django
                  </p>
                </li>
                <li>
                  <p className="date">Aug2021 - Sep2021</p>
                  <h2>
                    Compsoft Technologies{" "}
                    <span className="type">
                      <i>–Belgaum, Karnataka</i>
                    </span>
                  </h2>
                  <p className="type">
                    Full Stack Development Intern- HTML, CSS and JavaScript
                  </p>
                </li>
                <li>
                  <p className="date">Oct2022 - Dec2022</p>
                  <h2>Udemy</h2>
                  <p className="type">
                    The Complete 2023 Web Development Bootcamp
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-24">
          <div className="col-md-12">
            <div className="d-flex profile-contact-credentials-wrap gap-24">
              <div data-aos="zoom-in">
                <div className="about-profile-box info-box shadow-box h-full">
                  <div className="inner-profile-icons shadow-box">
                    <Link
                      to="https://www.linkedin.com/in/sandeep-patil-5702a8223"
                      target="_blank"
                    >
                      <i className="iconoir-linkedin"></i>
                    </Link>
                    <Link
                      to="https://github.com/sandeeppatil-903"
                      target="_blank"
                    >
                      <i className="iconoir-github"></i>
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>Connect with me</h4>
                      <h1>Profiles</h1>
                    </div>

                    <Link href="./contact.html" className="about-btn">
                      <img
                        src="%PUBLIC_URL%/assets/images/icon-2.svg"
                        alt="Button"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div data-aos="zoom-in" className="flex-1">
                <div className="about-contact-box info-box shadow-box">
                  <Link className="overlay-link" href="./contact.html"></Link>
                  <img
                    src="%PUBLIC_URL%/assets/images/icon2-2.png"
                    alt="Icon"
                    className="star-icon"
                  />
                  <h1>
                    Let's <br />
                    work <span>together.</span>
                  </h1>
                  <Link href="./contact.html" className="about-btn">
                    <img
                      src="%PUBLIC_URL%/assets/images/icon-2.svg"
                      alt="Button"
                    />
                  </Link>
                </div>
              </div>

              <div data-aos="zoom-in" className="h-full">
                <div className="about-crenditials-box info-box shadow-box">
                  <Link className="overlay-link" to="/certificate"></Link>
                  <img
                    src="%PUBLIC_URL%/assets/images/certificate.png"
                    alt="Sign"
                    height={100}
                  />
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="infos">
                      <h4>more about me</h4>
                      <h1>Certifications</h1>
                    </div>

                    <Link to="/certificate" className="about-btn">
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
};

export default About;

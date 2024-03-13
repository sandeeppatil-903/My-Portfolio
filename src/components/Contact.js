import React from "react";
import { Link } from "react-router-dom";
import icon3 from "../assets/images/icon3-2.png";

const Contact = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="gx-row d-flex justify-content-between gap-24">
          <div className="contact-infos">
            <h3 data-aos="fade-up">Contact Info</h3>
            <ul className="contact-details">
              <li className="d-flex align-items-center" data-aos="zoom-in">
                <div className="icon-box shadow-box">
                  <i className="iconoir-mail"></i>
                </div>
                <div className="right">
                  <span>MAIL</span>
                  <h4>sandipbp903@gmail.com</h4>
                </div>
              </li>

              <li className="d-flex align-items-center" data-aos="zoom-in">
                <div className="icon-box shadow-box">
                  <i className="iconoir-phone"></i>
                </div>
                <div className="right">
                  <span>Contact</span>
                  <h4>+919380752584</h4>
                </div>
              </li>

              <li className="d-flex align-items-center" data-aos="zoom-in">
                <div className="icon-box shadow-box">
                  <i className="iconoir-map-pin "></i>
                </div>
                <div className="right">
                  <span>Location</span>
                  <h4>
                    Belgaum-590010 <br />
                    Karnataka <br />
                    India
                  </h4>
                </div>
              </li>
            </ul>

            <h3 data-aos="fade-up">Social Info</h3>
            <ul className="social-links d-flex align-center" data-aos="zoom-in">
              <li>
                <Link
                  className="shadow-box"
                  to="https://github.com/sandeeppatil-903"
                  target="_blank"
                >
                  <i className="iconoir-github"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="shadow-box"
                  to="https://www.linkedin.com/in/sandeep-patil-5702a8223"
                  target="_blank"
                >
                  <i className="iconoir-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div data-aos="zoom-in" className="contact-form">
            <div className="shadow-box">
              <img src={icon3} alt="Icon" />
              <h1>
                Let’s work <span>together.</span>
              </h1>
              <form>
                <div
                  className="alert alert-success messenger-box-contact__msg"
                  style={{ display: "none" }}
                  role="alert"
                >
                  Your message was sent successfully.
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Name *"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email *"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your Subject *"
                  />
                </div>
                <div className="input-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message *"
                  ></textarea>
                </div>
                <div className="input-group">
                  <button
                    className="theme-btn submit-btn"
                    name="submit"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

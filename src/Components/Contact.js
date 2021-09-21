import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <h1 class="section-heading mb50px">
          <span>
            <i class="far fa-address-card"></i>
          </span>
          <span> Contact </span>
        </h1>
        <div id="contact-container">
          <div id="contact-form-container">
            <form id="contact-form">
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Your Name"
              />
              <input
                id="input-email"
                name="input-email"
                type="text"
                required
                placeholder="Your Email"
              />
              <textarea
                id="input-message"
                name="input-message"
                rows="2"
                cols="40"
                placeholder="Message"
              ></textarea>
              <button class="sub-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div id="my-details-container">
            <h3> Stay in touch ! </h3>
            <p>
              <ul>
                <li>
                  {" "}
                  Current Address: Near GGR Towers , Bellandur , Sarjapur Road ,
                  Bengaluru{" "}
                </li>
                <li>
                  Permanent Address: House No 117A, Bosco Nagar Road No.1 ,
                  Latma Road Singhmore , Ranchi.
                </li>
              </ul>{" "}
            </p>

            <h3> My Address </h3>
            <div class="my-details-info-container">
              <i class="fas fa-map-marker-alt"></i>
              <span>Ranchi, Jharkhand</span>
            </div>
            <div class="my-details-info-container">
              <i class="far fa-envelope"></i>
              <span>srvkmr130@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="text-center social-icons">
          <ul class="no-list-style horizontal-list">
            <li>
              <a
                href="https://www.linkedin.com/in/saurabh-kumar-b20b51158/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/srvkmr130" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@srvkmr130" target="_blank">
                <i class="fab fa-medium"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.quora.com/profile/Saurabh-Kumar-3440"
                target="_blank"
              >
                <i class="fab fa-quora"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Contact;

import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      isSubmitted: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  resetOnSubmit = () => {
    this.setState({
      email: "",
      message: "",
      isSubmitted: true,
    });
  };
  handleSubmit = async (e) => {
    const { name, email, message, isSubmitted } = this.state;
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/srvkmr130/google_sheets/FkqDAwoRHDtpOuLR?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      this.resetOnSubmit();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, email, message, isSubmitted } = this.state;
    return (
      <section id="contact">
        <h1 class="section-heading mb50px">
          <span>
            <i class="far fa-address-card"></i>
          </span>
          <span> Contact </span>
        </h1>
        <div id="contact-container">
          {!isSubmitted && (
            <div id="contact-form-container">
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <input
                  id="input-name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  onChange={this.handleNameChange}
                />
                <input
                  id="input-email"
                  name="input-email"
                  type="text"
                  required
                  placeholder="Your Email"
                  onChange={this.handleEmailChange}
                />
                <textarea
                  id="input-message"
                  name="input-message"
                  rows="2"
                  cols="40"
                  placeholder="Message"
                  onChange={this.handleMessageChange}
                ></textarea>
                <button class="sub-btn" type="submit">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          )}
          {isSubmitted && (
            <div>
              <h5 id="contact-form-message">
                Thanks <em id="user-name">{name}</em> for connecting !! Will get
                back to you shortly...
              </h5>
            </div>
          )}
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

import React, { Component } from "react";
import downloadPDF from "../resources/Saurabh_2021.pdf";

class Header extends Component {
  render() {
    return (
      <header id="body-header">
        <nav>
          <div class="dropdown-menu text-right">
            <div id="icon-bar">
              <div class="bars">
                <i class="fas fa-bars"></i>
              </div>
              <div id="bar-close" class="hidden">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="dropdown-list nav-menu">
              <ul class="no-list-style">
                <li>
                  <a href="#"> Home </a>
                </li>
                <li>
                  <a href="#about"> About </a>
                </li>
                <li>
                  <a href="#skills"> Skills </a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    <a class="text-decoration-none" href={downloadPDF} download>
                      RESUME
                    </a>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      <i class="fas fa-download"></i>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <ul class="no-list-style horizontal-list text-center nav-menu paddingHorizontal10px">
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#about"> About </a>
            </li>
            <li>
              <a href="#skills"> Skills </a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="download-resume">
          <button type="button" class="btn btn-primary position-relative">
            <a
              class="text-decoration-none changeTextColor"
              href={downloadPDF}
              download
            >
              <div className="inline">RESUME</div>
            </a>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <i class="fas fa-download"></i>
              {/* <span class="visually-hidden">unread messages</span> */}
            </span>
          </button>
        </div>
        <div id="scroll-view">
          <div id="scroll-progress-bar">
            <div id="scrolled"></div>
          </div>
        </div>
        <div id="name-social-container">
          <div class="text-center">
            <h1 id="my-name">SAURABH KUMAR</h1>
          </div>
          <div>
            <ul class="no-list-style horizontal-list text-center social-icons">
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
        </div>
      </header>
    );
  }
}

export default Header;

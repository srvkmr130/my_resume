import React, { Component } from "react";
import resumeImage from "../resources/resume.png";
import iPodImage from "../resources/iPod.jpeg";
import musicPlayerProject from "../resources/musicPlayer.jpeg";
import socialigeProject from "../resources/socialige.jpg";
import virtualAssistantImage from "../resources/virtualAssistant.jpg";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1 className="section-heading mb75px">
          <span>
            <i className="fas fa-th-list"></i>
          </span>
          <span> Portfolio </span>
        </h1>

        <div id="portfolio-container" data-aos="zoom-in">
          <div class="portfolio-image-container">
            <img src={resumeImage} />
            <div class="portfolio-details">
              <p>
                <a
                  class="text-decoration-none"
                  href="https://srvkmr130.github.io/iPod.js"
                  target="_blank"
                >
                  Resume Project - Build using React
                </a>
              </p>
            </div>
          </div>
          <div class="portfolio-image-container">
            <img src={iPodImage} />
            <div class="portfolio-details">
              <p>
                <a
                  class="text-decoration-none"
                  href="https://srvkmr130.github.io/iPod.js"
                  target="_blank"
                >
                  iPod.js - Replica of iPod.js built using REACT and ZingTouch
                </a>
              </p>
            </div>
          </div>
          <div class="portfolio-image-container">
            <img src={virtualAssistantImage} />
            <div class="portfolio-details">
              <p>
                <a
                  class="text-decoration-none"
                  href="https://anna-assistant.github.io/"
                  target="_blank"
                >
                  Anna Assistant - Virtual assistant on Google Chrome
                </a>
              </p>
            </div>
          </div>
          <div class="portfolio-image-container">
            <img src={socialigeProject} />
            <div class="portfolio-details">
              <p>
                <a
                  class="text-decoration-none"
                  href="https://github.com/srvkmr130/socialige"
                  target="_blank"
                >
                  Socialige <em>- "Social Network"</em>
                </a>
              </p>
            </div>
          </div>
          <div class="portfolio-image-container">
            <img src={musicPlayerProject} />
            <div class="portfolio-details">
              <p>
                <a
                  class="text-decoration-none"
                  href="https://github.com/srvkmr130/MusicPlayerProject"
                  target="_blank"
                >
                  Music Player Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

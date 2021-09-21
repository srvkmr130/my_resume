import React, { Component } from "react";
import odessaLogo from "../resources/favicon.png";

class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <h1 class="section-heading mb75px">
          <span>
            <i class="fas fa-briefcase"></i>
          </span>
          <span> Work Experience </span>
        </h1>

        <div class="timeline">
          <div class="timeline-box" data-aos="fade-up-right">
            <div class="timeline-container">
              <div class="timeline-logo">
                <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
              </div>
              <h3 class="experience-designation  m0 m-blue">
                {" "}
                Teaching Assistant{" "}
              </h3>
              <h4 class="experience-company-name"> Coding Ninjas </h4>
              <h5 class="experience-duration m0"> Sept, 2021 - Present </h5>

              <p class="experience-description text-justify">
                {" "}
                Responsibilites : 1. Taking Doubts for students enrolled in Full
                Stack WEb Development Course. 2. Monitoring Performance of
                assigned Students ( approx 20 students ) 3. Evaluate assigned
                students' projects which are generally in courses ML, Data
                Science and Web Development.{" "}
              </p>
            </div>
          </div>

          <div class="timeline-box right" data-aos="fade-down-left">
            <div class="timeline-container">
              <div class="timeline-logo">
                <img src={odessaLogo} />
              </div>
              <h3 class="experience-designation  m0 m-blue">
                {" "}
                Software Engineer{" "}
              </h3>
              <h4 class="experience-company-name"> Odessa Technologies </h4>
              <h5 class="experience-duration m0"> Jul,2020 - Present </h5>
              <p class="experience-description text-justify">
                {" "}
                1. Worked on Odessa Test – a desktop application built on WPF
                MVVM that is used for regression execution and complex super
                scenario testing.Introduced new features, resolved bugs and
                worked on UI Enhancements of the tool. 2. Worked with Research
                Team for Odessa .NET 5.0 Migration.{" "}
              </p>
            </div>
          </div>

          <div class="timeline-box left" data-aos="fade-up-right">
            <div class="timeline-container">
              <div class="timeline-logo">
                <img src={odessaLogo} />
              </div>
              <h3 class="experience-designation m0 m-blue">
                {" "}
                Software Engineer Intern{" "}
              </h3>
              <h4 class="experience-company-name"> Odessa Technologies </h4>
              <h5 class="experience-duration m0"> Sep,2019 - Jun,2020 </h5>

              <p class="experience-description text-justify">
                {" "}
                Build a Service order Request web app using Odessa Tools to
                implement functionality such as registering user requests /
                complaints, tracking status of ordered request, following series
                of workflow steps till resolution of the request.{" "}
              </p>
            </div>
          </div>

          <div id="timeline-divider">
            <div class="timeline-traveller">
              <div>
                <i class="fas fa-plane"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;

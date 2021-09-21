import React, { Component } from "react";
import thsLogo from "../resources/ths.png";
import soaLogo from "../resources/soa.png";

class Education extends Component {
  render() {
    return (
      <section id="education">
        <h1 class="section-heading mb75px">
          <span>
            <i class="fas fa-graduation-cap"></i>
          </span>
          <span> Education </span>
        </h1>

        <div class="timeline">
          <div class="timeline-box left" data-aos="fade-up-right">
            <div class="timeline-container">
              <div class="timeline-logo">
                <img src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000030_1550710829_ninjasicon.png" />
              </div>
              <h3 class="experience-designation  m0 m-blue"> MERN Stack </h3>
              <h4 class="experience-company-name "> Coding Ninjas </h4>
              <h5 class="experience-duration m0"> Feb,2021 - Sept,2021 </h5>

              <p class="experience-description text-justify">
                {" "}
                Completed Advance Full Stack Web Dev with Node.js & React with
                95% above in all the 3 courses
              </p>
            </div>
          </div>

          <div class="timeline-box right" data-aos="fade-up-left">
            <div class="timeline-container">
              <div class="timeline-logo">
                <img src={soaLogo} />
              </div>
              <h3 class="experience-designation  m0 m-blue"> BTech CSE </h3>
              <h4 class="experience-company-name "> Siksha 'O' Anusandhan </h4>
              <h5 class="experience-duration m0"> Aug,2016 - Jun,2020 </h5>

              <p class="experience-description text-justify">
                {" "}
                Graduated from Siksha 'O' Anusandhan University(ITER) as a CSE
                Engineer with CGPA of 9.5{" "}
              </p>
            </div>
          </div>

          <div class="timeline-box left" data-aos="fade-up-right">
            <div class="timeline-container">
              <div class="timeline-logo">
                <img src={thsLogo} />
              </div>
              <h3 class="experience-designation  m0 m-blue"> 12th , 10th </h3>
              <h4 class="experience-company-name "> Tender Heart School </h4>
              <h5 class="experience-duration m0"> Apr,2014 - Apr2016 </h5>

              <p class="experience-description text-justify">
                {" "}
                Achieved above 85% in 12th Boards exam and 9.6 CGPA in 10th
              </p>
            </div>
          </div>

          <div id="timeline-divider">
            <div class="timeline-traveller">
              <div>
                <i class="fas fa-car-side"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;

import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <section id="skills">
        <h1 class="section-heading mb75px ">
          <span>
            <i class="fas fa-chalkboard-teacher"></i>
          </span>
          <span> SKILLS </span>
        </h1>

        <div class="skills-display">
          <div class="skill-progress">
            <div class="eighty-percent mb-light-purple" data-bar-width="80">
              <div class="skill-name">
                <span> JavaScript </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="eighty-five-percent mb-orange" data-bar-width="85">
              <div class="skill-name">
                <span> HTML </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="eighty-percent mb-light-purple" data-bar-width="80">
              <div class="skill-name">
                <span> CSS </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="eighty-percent mb-light-purple" data-bar-width="80">
              <div class="skill-name">
                <span> Bootstrap </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="seventy-percent mb-teal" data-bar-width="70">
              <div class="skill-name">
                <span> React </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="seventy-percent mb-blue" data-bar-width="70">
              <div class="skill-name">
                <span> NodeJs </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="eighty-percent mb-light-purple" data-bar-width="80">
              <div class="skill-name">
                <span> MongoDB </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="fifty-percent mb-teal" data-bar-width="50">
              <div class="skill-name">
                <span> Redux </span>
              </div>
            </div>
          </div>
          <div class="skill-progress">
            <div class="seventy-percent mb-light-purple" data-bar-width="80">
              <div class="skill-name">
                <span> Express </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;

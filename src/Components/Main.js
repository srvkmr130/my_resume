import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skill from "./Skill";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <main>
        <About />
        <Skill />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </main>
    );
  }
}

export default Main;

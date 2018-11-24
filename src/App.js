import React, { Component } from "react";

import "./App.css";

import TitelsAndIcons from "./sections/TitlesAnaIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />

        <TitelsAndIcons />
        <AboutSection />
        <SkillSection />
 
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Fullpage from "../components/Fullpage.js";
import data from '../data.json'


class AboutSection extends Component {
  render() {
    return (
      <div className="fullpage second">
      <h3>{data.sections[0].title}</h3>
      <p>{data.sections[0].items[0].content}</p>
      <p>{data.sections[0].items[1].content}</p>
      <p>{data.sections[0].items[1].content}</p>
    </div>
    );
  }
}
export default AboutSection;

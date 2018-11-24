import React, { Component } from "react";
import Fullpage from "../components/Fullpage.js";
import SkillCard from "../components/SkillCard";
import data from '../data.json'


class SkillSection extends Component {
  render() {
    return (
        <div className="fullpage third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(eachskill => {
            return (
             <SkillCard skill={eachskill} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default SkillSection;
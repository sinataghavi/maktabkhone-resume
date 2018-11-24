import React, { Component } from "react";
import Fullpage from "../components/Fullpage.js";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import * as Scroll from "react-scroll";
import { Link, Element } from "react-scroll";

class TitelsAndIcons extends Component {
  state = {
    color: "white"
  };
  chengeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white"
    });
  };

  render() {
    return (
      <div>
        <Fullpage className="first">

          <h1
            className="title"
            style={{
              color: this.state.color
            }}
            onMouseOver={() => {
              this.chengeColor();
            }}
            onMouseLeave={() => {
              this.chengeColor();
            }}
          >
            {data.title}
          </h1>
          <div className="subtitle">
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icons">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>

        <Element name="about" className="element">
         
        </Element>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
        <DownIcon
          icon={data.icons.down}
          onClick={() => console.log("im working")}
        />
        </Link>
      </div>
    );
  }
}
export default TitelsAndIcons;

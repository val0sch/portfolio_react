import React from "react";
import "./skills.css";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills I Have</h5>
      <div className="boxes-container">
        <div className="box">
          <div className="box-inner">
            <div className="box-front">
              <h2>Soft Skills</h2>
            </div>
            <div className="box-back">
              <ul className="list">
                <li>Curiosité</li>
                <li>Patience</li>
                <li>Tenacité</li>
                <li>Créativité</li>
                <li>Communication</li>
                <li>Autonomie</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-inner">
            <div className="box-front">
              <h2>Hard Skills</h2>
            </div>
            <div className="box-back">
              <ul className="list">
                <li>
                  <SiJavascript className="logo" /> <br />
                  Javacript
                </li>
                <li>
                  <SiReact className="logo" /> <br />
                  React JS
                </li>
                <li>
                  <FaNodeJs className="logo" /> <br />
                  Node Js
                </li>
                <li>Express</li>
                <li>
                  <GrMysql className="logo" /> <br />
                  MySql
                </li>
                <li>
                  <FaGithubAlt className="logo" />
                  <br />
                  Git/Github
                </li>
                <li>
                  <SiNotion className="logo" />
                  <br />
                  Notion
                </li>
                <li>
                  <FiFigma className="logo" />
                  <br />
                  Figma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;

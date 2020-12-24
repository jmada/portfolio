import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiJqueryLogo,
  DiGulp,
  DiPhp,
  DiSymfony,
  DiComposer,
  DiPython,
  DiMysql,
  DiPostgresql,
  DiWordpress,
  DiGit,
  DiLinux,
  DiWebplatform,
  DiOpenshift,
  DiDocker,
} from "react-icons/di";

export default function Skill() {
  const devIconStyle = {
    position: "absolute",
    fill: "#4acaa8",
    height: "2.5em",
    width: "2.5em",
    top: "0",
    left: "0",
    lineHeight: "2.5em",
  };

  return (
    <div id="wrapper">
      <div id="main">
        <section id="two">
          <div className="container">
            <h3>Technological Skills</h3>
            <p>Some technologies I've worked with: </p>
            <ul className="feature-icons">
              <li>
                <DiHtml5 style={devIconStyle} /> HTML
              </li>
              <li>
                <DiCss3 style={devIconStyle} /> CSS
              </li>
              <li>
                <DiSass style={devIconStyle} /> SASS
              </li>
              <li>
                <DiJavascript1 style={devIconStyle} /> JavaScript
              </li>
              <li>
                <DiReact style={devIconStyle} /> ReactJS
              </li>
              <li>
                <DiJqueryLogo style={devIconStyle} /> jQuery
              </li>
              <li>
                <DiGulp style={devIconStyle} /> Gulp
              </li>
              <li>
                <DiPhp style={devIconStyle} /> PHP
              </li>
              <li>
                <DiSymfony style={devIconStyle} /> Symfony
              </li>
              <li>
                <DiComposer style={devIconStyle} /> Composer
              </li>
              <li>
                <DiPython style={devIconStyle} /> Python
              </li>
              <li>
                <DiMysql style={devIconStyle} /> MySQL
              </li>
              <li>
                <DiPostgresql style={devIconStyle} /> PostgreSQL
              </li>
              <li>
                <DiWordpress style={devIconStyle} /> WordPress
              </li>
              <li>
                <DiGit style={devIconStyle} /> Git & Github
              </li>
              <li>
                <DiLinux style={devIconStyle} /> Bash
              </li>
              <li>
                <DiWebplatform style={devIconStyle} /> API / REST / RESTful
              </li>
              <li>
                <DiOpenshift style={devIconStyle} /> OpenShift
              </li>
              <li>
                <DiDocker style={devIconStyle} /> Docker
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

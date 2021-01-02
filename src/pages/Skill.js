import React from "react";
import { useSpring, animated } from "react-spring";
import skills from "../utils/services/skills";

export default function Skill() {
  const devIcon = {
    position: "absolute",
    fill: "#1C273B",
    height: "2.5em",
    width: "2.5em",
    top: "0",
    left: "0",
    lineHeight: "2.5em",
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 4000,
      duration: 800,
    },
  });

  return (
    <div id="wrapper">
      <div id="main">
        <section id="two">
          <animated.div style={fadeIn} className="container">
            <h3>Technological Skills</h3>
            <p>Some technologies I've worked with: </p>
            <ul className="feature-icons">
              {skills.map((skill) => {
                return (
                  <li key={skill.id}>
                    <skill.icon style={devIcon} /> {skill.name}
                  </li>
                );
              })}
            </ul>
          </animated.div>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import { useSpring, animated } from "react-spring";
import bannerImage from "../assets/images/banner.jpeg";

export default function About() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div id="wrapper">
      <div id="main">
        <animated.section style={fadeIn} id="one">
          <div className="image main" data-position="center">
            <img src={bannerImage} alt="Sky Full of Stars" />
          </div>
          <div className="container">
            <header className="major">
              <h2>Hello there!</h2>
              <p>
                My name is Juan Paredes and
                <br />
                I'm a Full Stack Developer.
              </p>
            </header>
            <p>
              I like working on Web Development Projects, I have 4 years
              experience working as Web Developer, creating landing pages,
              administration systems (web based), API REST, e-Commerce and other
              projects that involves Web Development. For fun I love traveling,
              reading and working on amazing projects.
            </p>
          </div>
        </animated.section>
      </div>
    </div>
  );
}

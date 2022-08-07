import React from "react";
import { useSpring, animated } from "react-spring";
import bannerImage from "../assets/images/banner.jpeg";

export default function About() {
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
                &nbsp; I'm a Full Stack Developer.
              </p>
            </header>
            <p>
				I like working on Web Development Projects. I have 5+ years of experience working as a Web Developer, creating landing pages, administration systems (web-based), API REST, e-commerce, and other web development projects. For fun, I love traveling, reading, and working on unique projects.
            </p>
          </div>
        </animated.section>
      </div>
    </div>
  );
}

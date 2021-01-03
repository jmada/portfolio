import React from "react";
import { useSpring, animated } from "react-spring";
import projects from "../utils/services/projects";
import Card from "../components/Card";

export default function Project() {
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
        <section id="three">
          <animated.div style={fadeIn} className="container">
            <h3>My Latest Work</h3>
            <p>Some things I've built:</p>
            <div className="features">
              {projects.map((project) => (
                <Card
                  id={project.id}
                  key={project.id}
                  link={project.link}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  summary={project.summary}
                />
              ))}
            </div>
          </animated.div>
        </section>
      </div>
    </div>
  );
}

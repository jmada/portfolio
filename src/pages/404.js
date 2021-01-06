import React from "react";
import { useSpring, animated } from "react-spring";

export default function NotFoundPage() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 4000,
      duration: 800,
    },
  });

  return (
    <div>
      <div id="wrapper">
        <div id="main">
          <section id="five">
            <animated.div style={fadeIn} className="container">
              <h3>This page isn't available. Sorry about that.</h3>
            </animated.div>
          </section>
        </div>
      </div>
    </div>
  );
}

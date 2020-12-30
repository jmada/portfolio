import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const handleClick = () => {
    document.body.classList.toggle("header-visible");
  };

  return (
    <div id="titleBar">
      <span className="toggle" onClick={() => handleClick()}>
        <FontAwesomeIcon icon={faBars} />
      </span>
      <span className="title">
        <a href="/" rel="noopener noreferrer">
          Juan Paredes
        </a>
      </span>
    </div>
  );
}

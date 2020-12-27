import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const handleClick = () => {
    document.body.classList.toggle("header-visible");
  };

  return (
    <div id="titleBar">
      <a href="#" className="toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </a>
      <span className="title">
        <a href="#">Juan Paredes</a>
      </span>
    </div>
  );
}

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(false);

  function openHeader() {
    document.body.classList.add("header-visible");
    setShowHeader(true);
  }

  function hideHeader() {
    document.body.classList.remove("header-visible");
    setShowHeader(false);
  }

  function handleClick() {
    showHeader ? hideHeader() : openHeader();
  }

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

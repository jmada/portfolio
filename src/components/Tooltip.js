import React, { useState } from "react";

export default function Tooltip({ children, tip, direction, delay }) {
  const [isActive, setIsActive] = useState(false);
  let timeout;

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setIsActive(true);
    }, delay || 400);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setIsActive(false);
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isActive && <div className={`tip ${direction || "top"}`}>{tip}</div>}
    </div>
  );
}

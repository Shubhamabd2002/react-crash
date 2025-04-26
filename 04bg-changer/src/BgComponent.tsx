import React from "react";
import "./BgComponent.css";

const BgComponent = ({ bgColor }) => {
  console.log("🚀 ~ BgComponent ~ bgColor:", bgColor);
  return (
    <div className={`root-div ${bgColor}`}>
      <h1>Background color changing component</h1>
    </div>
  );
};

export default BgComponent;

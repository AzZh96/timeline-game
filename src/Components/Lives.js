import React from "react";
import "../Styles/style.css";
import "../Styles/fonts.css";

// Lives component that receives a number of lives and renders that number of hearts on screen
const Lives = ({ lives }) => {
  return (
    <div className="scoreLivesStyle">
      <span className="scoreLivesLabelStyle">Lives:</span>
      {/* Render a heart for each life */}
      {[...Array(lives)].map((_, index) => (
        <span key={index} style={heartStyle}>
          ❤
        </span>
      ))}
    </div>
  );
};

// Style object for the heart icons
const heartStyle = {
  fontSize: "1.5vw",
  marginLeft: "0.2vw",
  color: "#990033"
};

export default Lives;

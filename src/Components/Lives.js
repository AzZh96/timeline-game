import React from "react";
import "../Styles/style.css";
import "../Styles/fonts.css";

const Lives = ({ lives }) => {
  return (
  <div className="scoreLivesStyle">
  <span className="scoreLivesLabelStyle">Lives:</span>
  {[...Array(lives)].map((_, index) => (
  <span key={index} style={heartStyle}>
  ❤
  </span>
  ))}
  </div>
  );
  };

  const heartStyle = {
  fontSize: "1.5vw",
  marginLeft: "0.2vw",
  color: "#990033"
  };
  
  export default Lives;
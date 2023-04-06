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
  fontSize: "25px",
  marginLeft: "5px",
  color: "#990033"
  };
  
  export default Lives;
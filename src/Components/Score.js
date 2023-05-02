import React from "react";
import "../Styles/style.css";
import "../Styles/fonts.css";

// component for displaying the score
const Score = ({ score }) => {
return (
<div className="scoreLivesStyle">
<span className="scoreLivesLabelStyle">Score:</span>
<div style={scoreStyle}>{score}</div>
</div>
);
};

// Styles for the score display
const scoreStyle = {
fontSize: "1.5vw",
marginLeft: "1.1vw",
color: "#002F6C",
fontWeight: "bold"
};

export default Score;
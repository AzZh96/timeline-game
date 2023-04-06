import React from "react";
import "../Styles/style.css";
import "../Styles/fonts.css";

const Score = ({ score }) => {
return (
<div className="scoreLivesStyle">
<span className="scoreLivesLabelStyle">Score:</span><div style={scoreStyle}>{score}</div>
</div>
);
};

const scoreStyle = {
    fontSize: "30px",
    marginLeft: "15px",
    color: "#002F6C",
    fontWeight: "bold"
    
    };
export default Score;
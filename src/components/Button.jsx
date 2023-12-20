import React from "react";
import "../style/Login.css";

const Button = ({ label }) => {
  return (
    <div className="custom-button-container">
      <button className="custom-button">{label}</button>
    </div>
  );
};

export default Button;

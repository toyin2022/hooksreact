import React from "react";
import "./button.css";

const Button = ({ label, color, onClick, textcolor }) => {
  return (
    <div onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {label}
    </div>
  );
};

export default Button;

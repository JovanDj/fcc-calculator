import React from "react";
import "./Button.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val === "=";
};
const Button = props => {
  return (
    <div
      id={props.id}
      className={`button-wrapper ${
        isOperator(props.children) ? "" : "operator"
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;

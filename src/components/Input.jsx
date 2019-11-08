import React from "react";
import "./Input.css";

const Input = props => {
  return (
    <div id="display" className="input">
      {props.input}
    </div>
  );
};

export default Input;

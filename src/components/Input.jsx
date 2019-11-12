import React from "react";
import "./Input.css";

const Input = props => {
  return (
    <input
      value={props.input}
      placeholder={props.inputd}
      readOnly
      id="display"
      className="input"
    ></input>
  );
};

export default Input;

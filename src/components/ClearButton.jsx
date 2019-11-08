import React from "react";
import "./ClearButton.css";

const ClearButton = props => {
  return (
    <div id={props.id} className="clear-btn" onClick={props.handleClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;

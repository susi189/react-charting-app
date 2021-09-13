import React from "react";
import "./Start.css";

const Start = (props) => {
  const startNew = () => {
    props.onClickRender();
  };

  const updateCurrent = () => {
    props.onClickRender();
  };
  return (
    <div className="container">
      <div id="wlc-message">Hello &#10084;</div>
      <div id="wlc-page-btn" onClick={startNew}>
        Start new cycle
      </div>
      <div id="wlc-page-btn" onClick={updateCurrent}>
        Update current cycle
      </div>
    </div>
  );
};

export default Start;

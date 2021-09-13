import React from "react";

const OptionItem = (props) => {
  return (
    <option key={props.i} value={props.value}>
      {props.description(props.value)}
    </option>
  );
};

export default OptionItem;

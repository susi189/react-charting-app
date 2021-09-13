import React from "react";
import OptionItem from "./OptionItem";

const AdditionalObserv = (props) => {
  const onChangeHandler = (event) => {
    props.onSelectAdditionalObserv(event.target.value);
  };

  const descr = (elem) => {
    for (let key in props.description) {
      if (key === elem) {
        return props.description[key];
      }
    }
  };

  return (
    <div className="new-observation__control" style={props.style}>
      <label htmlFor="addObserv">Record presence of mucus:</label>
      <select
        className="custom-select"
        id="addObserv"
        name="addObserv"
        value={props.value}
        onChange={onChangeHandler}
      >
        <option value=""></option>
        {props.records.map((val, i) => (
          <OptionItem key={i} value={val} description={descr} />
        ))}
      </select>
    </div>
  );
};

export default AdditionalObserv;

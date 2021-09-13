import React from "react";
import OptionItem from "./OptionItem";

const MainObservation = (props) => {
  const onChangeHandler = (event) => {
    props.onSelectObservation(event.target.value);
  };

  const descr = (elem) => {
    for (let key in props.description) {
      if (key === elem) {
        return props.description[key];
      }
    }
  };
  return (
    <div className="new-observation__control">
      <label htmlFor="observation">Your observation:</label>
      <select
        className="custom-select"
        id="observation"
        name="observation"
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

export default MainObservation;

import React from "react";

const ObservationDescription = (props) => {
  const onChangeHandler = (event) => {
    props.onSelectObservDescription(event.target.value);
  };
  return (
    <div className="new-observation__control" style={props.style}>
      <label htmlFor="observationDescr">Describe observed mucus</label>
      <select
        className="custom-select"
        id="observationDescr"
        name="observationDescr"
        value={props.value}
        onChange={onChangeHandler}
      >
        <option value=""></option>
        <option value="C">Cloudy(white)</option>
        <option value="C/K">Cloudy/Clear</option>
        <option value="G">Gummy(gluey)</option>
        <option value="K">Clear</option>
        <option value="L">Lubricative</option>
        <option value="P">Pasty</option>
        <option value="Y">Yellow</option>
      </select>
    </div>
  );
};

export default ObservationDescription;

import React, { useState } from "react";

const EnteredDate = (props) => {
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    let lastDate = props.lastDate;
    if (lastDate === event.target.value || lastDate > event.target.value) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    props.onSelectDate(event.target.value, isValid);
    console.log("last Date", isValid);
  };
  return (
    <div className="new-observation__control">
      <label htmlFor="date">Current Date: </label>
      <input
        style={{
          color: !isValid ? "red" : "black",
          outlineColor: !isValid ? "red" : "",
        }}
        type="date"
        min="2019-01-01"
        max="2022-01-01"
        value={props.value}
        onChange={onChangeHandler}
      ></input>
      {!isValid && <div className="invalid-alert">Invalid Date</div>}
    </div>
  );
};

export default EnteredDate;

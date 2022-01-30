import React, { useState, useEffect } from "react";

const EnteredDate = (props) => {
  const [isValidDate, setIsValidDate] = useState(true);

  const onChangeHandler = (event) => {
    let lastDate = props.lastDate;
    if (lastDate !== undefined) {
      if (
        lastDate.date === event.target.value ||
        lastDate.date > event.target.value
      ) {
        setIsValidDate(false);
      } else {
        setIsValidDate(true);
      }
    }
    props.onSelectDate(event.target.value);
    // props.isValidEntry(isValidDate);
  };

  useEffect(() => {
    props.isValidEntry(isValidDate);
  }, [isValidDate, props]);

  return (
    <div className="new-observation__control">
      <label htmlFor="date">Current Date: </label>
      <input
        style={{
          color: !isValidDate ? "red" : "black",
          outlineColor: !isValidDate ? "red" : "",
        }}
        type="date"
        min="2019-01-01"
        max="2026-01-01"
        value={props.value}
        onChange={onChangeHandler}
      ></input>
      {/* {!isValidDate && <div className="invalid-alert">Invalid Date</div>} */}
    </div>
  );
};

export default EnteredDate;

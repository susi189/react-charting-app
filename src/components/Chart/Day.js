import React, { useState } from "react";

const Day = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const {
    id,
    cycleDay,
    color,
    observation,
    additionalObserv,
    observationDescrip,
    quantity,
    date,
  } = props.myDay;

  const handleClick = (event) => {
    if (!isSelected) {
      props.getDay(props.myDay);
      // props.event(event.target.className);
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
    // console.log("Day", props.myDay);
  };

  // props.getTempData(props.myDay);
  return (
    <div
      className={`single-day ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="cycle-day">{cycleDay}</div>
      <div className="color" style={{ backgroundColor: color }}></div>
      <div className="observation-collection">
        <div className="observation-elem">{observation}</div>
        <div className="observation-elem">{additionalObserv}</div>
        <div className="observation-elem">{observationDescrip}</div>
        <div className="observation-elem">{quantity}</div>
      </div>
      <div className="date">{date}</div>
    </div>
  );
};

export default Day;

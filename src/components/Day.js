import React from "react";

const Day = (props) => {
  const {
    cycleDay,
    color,
    observation,
    additionalObserv,
    observtionDescrip,
    quantity,
    date,
  } = props.myDay;

  // props.getTempData(props.myDay);
  return (
    <div className="single-day">
      <div className="cycle-day">{cycleDay}</div>
      <div className="color" style={{ backgroundColor: color }}></div>
      <div className="observation-collection">
        <div className="observation-elem">{observation}</div>
        <div className="observation-elem">{additionalObserv}</div>
        <div className="observation-elem">{observtionDescrip}</div>
        <div className="observation-elem">{quantity}</div>
      </div>
      <div className="date">{date}</div>
    </div>
  );
};

export default Day;

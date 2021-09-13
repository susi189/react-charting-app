import React from "react";

const EmptyDay = (props) => {
  const {
    cycleDay,
    color,
    observation,
    additionalObserv,
    observtionDescrip,
    quantity,
    date,
  } = props.day;

  return (
    <div className="single-day">
      <div className="cycle-day">{cycleDay}</div>
      <div className="color"></div>
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

export default EmptyDay;

import React from "react";

function createDays(start, end) {
  let daysElem = [];
  for (let i = start + 1; i <= end; i++) {
    let dayObj = {
      cycleDay: i,
      color: "",
      observation: "",
      additionalObserv: "",
      observationDescrip: "",
      quantity: "",
      date: "",
    };
    daysElem.push(dayObj);
  }
  return daysElem;
}

export { createDays };

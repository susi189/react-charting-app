import React from "react";
import ObservationForm from "./ObservationForm";

import "./Record.css";

const Record = (props) => {
  const saveNewObservHandler = (enteredObserv) => {
    console.log(enteredObserv);
    props.onAddNewObserv(enteredObserv);
  };
  return (
    <div className="new-observation">
      <ObservationForm
        previousDay={props.previousDay}
        lastCycleDay={props.lastCycleDayNum}
        onSaveNewObserv={saveNewObservHandler}
      />
    </div>
  );
};

export default Record;

// const saveNewObservHandler = (enteredObserv, id) => {
//   const cycleDay = {
//     id: id + 1,
//     ...enteredObserv,
//   };
//   props.onAddNewObserv(cycleDay, id);
// };

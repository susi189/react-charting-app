import React, { useContext } from "react";
import ObservationForm from "./ObservationForm";
import SelectedContext from "../store/selected-day";

import "./Record.css";

const Record = (props) => {
  const context = useContext(SelectedContext);

  const saveNewObservHandler = (enteredObserv) => {
    console.log("record", enteredObserv, context.isSelected);
    if (context.isSelected) {
      props.onAddModifiedObserv(enteredObserv);
    } else {
      props.onAddNewObserv(enteredObserv);
    }
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

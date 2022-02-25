import React, { useState, useEffect, Fragment, useContext } from "react";
import MainObserv from "./ObservationComp/MainObservation";
import AdditionalObserv from "./ObservationComp/AdditionalObserv";
import ObservationDescription from "./ObservationComp/ObservationDescription";
import Quantity from "./ObservationComp/Quantity";
import EnteredDate from "./ObservationComp/EnteredDate";
import SelectedContext from "../store/selected-day";

import "./ObservationForm.css";

const mainObservation = [
  "H",
  "M",
  "L",
  "VL",
  "B",
  "0",
  "2",
  "2W",
  "4",
  "6",
  "8",
  "10",
  "10DL",
  "10SL",
  "10WL",
];

const additionalRecords = [
  "0",
  "2",
  "2W",
  "4",
  "6",
  "8",
  "10",
  "10DL",
  "10SL",
  "10WL",
];

// const description = ["C", "C/K", "G", "K", "L", "P", "Y"]; handled in the ObservationDescription component

const recordingSysyten = {
  H: "Heavy flow",
  M: "Medium flow",
  L: "Light flow",
  VL: "Very light flow",
  B: "Brown (or black) bleeding",
  0: "Dry",
  2: "Damp without lubrication",
  "2W": "Wet without lubrication",
  4: "Shiny without lubrication",
  6: "Sticky(1/4 in | 0.5cm)",
  8: "Tacky (1/2 - 3/4 inch | 1.0 - 2.0 cm)",
  10: "Strechy (1 inch | 2.5cm or more) ",
  "10DL": "Damp with lubrication",
  "10SL": "Shiny with lubrication",
  "10WL": "Wet with lubrication",
};

// const modifyDate = (date) => {};

const ObservationForm = (props) => {
  const context = useContext(SelectedContext);
  const [isValid, setIsValid] = useState(false);
  const [disable, setDisable] = useState("false");
  const [cycleDay, setCycleDay] = useState(1);
  const [observation, setObservation] = useState("");
  const [additionalObserv, setAdditionalObserv] = useState("");
  const [observationDescrip, setObservDescrition] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [show, setShow] = useState({ display: "none" });
  const [addObservShow, setAddObservShow] = useState({ display: "none" });
  const [observDescrShow, setObservDescrShow] = useState({ display: "none" });

  const observationHandler = (event) => {
    setObservation(event);
  };

  const additionalObservHandler = (event) => {
    setAdditionalObserv(event);
  };

  const observDescriptionHandler = (event) => {
    setObservDescrition(event);
  };

  const quantityHandler = (event) => {
    setQuantity(event);
  };

  const dateHandler = (event) => {
    setEnteredDate(event);
  };

  const isValidEntryHandler = (bool) => {
    setIsValid(bool);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newObserv = {};
    if (observation === "" || !isValid) {
      alert("You need record your observation");
    } else {
      if (observation && isValid && !context.isSelected) {
        let currentCycleDay = props.lastCycleDay + 1;
        newObserv = {
          cycleDay: currentCycleDay,
          color: color,
          observation: observation,
          additionalObserv: additionalObserv,
          observationDescrip: observationDescrip,
          quantity: quantity,
          date: enteredDate,
          cycleNum: props.currentCycleDay,
        };
      } else if (observation && isValid && context.isSelected) {
        newObserv = {
          cycleDay: cycleDay,
          color: color,
          observation: observation,
          additionalObserv: additionalObserv,
          observationDescrip: observationDescrip,
          quantity: quantity,
          date: enteredDate,
          cycleNum: null,
        };
      }

      props.onSaveNewObserv(newObserv);
      setObservation("");
      setAdditionalObserv("");
      setObservDescrition("");
      setQuantity("");
      setEnteredDate("");
      setCycleDay(cycleDay); //changed from setCycleDay(cycleDay + 1) this increment seems to be some relict from the past
      // setOnLoad(false);
    }
  };

  const modifyChartHandler = () => {
    if (context.isSelected) {
      setObservation(context.isSelectedDay.observation);
      setAdditionalObserv(context.isSelectedDay.additionalObserv);
      setObservDescrition(context.isSelectedDay.observationDescrip);
      setQuantity(context.isSelectedDay.quantity);
      setEnteredDate(context.isSelectedDay.date);
      setCycleDay(context.isSelectedDay.cycleDay);
    }
  };

  useEffect(() => {
    if (!isValid) {
      setDisable("true");
    } else {
      setDisable("false");
    }
  }, [isValid]);

  useEffect(() => {
    modifyChartHandler();
  }, [context]);

  useEffect(() => {
    if (observation === "L" || observation === "VL" || observation === "B") {
      setAddObservShow({ display: "block" });
      setShow({ display: "block" });
    } else if (
      observation === "0" ||
      observation === "2" ||
      observation === "2W" ||
      observation === "4" ||
      observation === "10DL" ||
      observation === "10SL" ||
      observation === "10WL"
    ) {
      setShow({ display: "block" });
    } else if (
      observation === "6" ||
      observation === "8" ||
      observation === "10"
    ) {
      setObservDescrShow({ display: "block" });
      setShow({ display: "block" });
    } else {
      setObservDescrShow({ display: "none" });
      setAddObservShow({ display: "none" });
      setShow({ display: "none" });
      setAdditionalObserv("");
      setObservDescrition("");
      setQuantity("");
    }
    //cleanup function
    return () => {
      setAddObservShow({ display: "none" });
      setObservDescrShow({ display: "none" });
    };
  }, [observation]);

  useEffect(() => {
    if (
      observation === "H" ||
      observation === "M" ||
      observation === "L" ||
      observation === "VL" ||
      observation === "B"
    ) {
      setColor("#d72638");
    } else if (
      observation === "0" ||
      observation === "2" ||
      observation === "2W" ||
      observation === "4"
    ) {
      setColor("#436436");
    } else if (
      observation === "6" ||
      observation === "8" ||
      observation === "10" ||
      observation === "10DL" ||
      observation === "10SL" ||
      observation === "10WL"
    ) {
      setColor("#FFFFFF");
    }
  }, [observation]);

  useEffect(() => {
    let today = new Date();

    if (props.previousDay !== undefined) {
      let prevDate = props.previousDay.date;
      let prevDateYear = parseInt(prevDate.slice(0, 4));
      let prevDateMonth = parseInt(prevDate.slice(5, 7)) - 1;
      let prevDateDay = parseInt(prevDate.slice(-2));
      today = new Date(prevDateYear, prevDateMonth, prevDateDay);
      today.setUTCDate(today.getUTCDate() + 1);
    }

    let day = today.getDate();
    let month = today.getMonth() + 1;
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    let date = today.getFullYear() + "-" + month + "-" + day;
    setEnteredDate(date);
  }, [props.previousDay]);

  return (
    <Fragment>
      <form className="form-handler" onSubmit={handleSubmit}>
        <div className="new-observation__controls">
          <MainObserv
            records={mainObservation}
            description={recordingSysyten}
            value={observation}
            onSelectObservation={observationHandler}
            isValidEntry={isValidEntryHandler}
          />
          <AdditionalObserv
            records={additionalRecords}
            description={recordingSysyten}
            style={addObservShow}
            value={additionalObserv}
            onSelectAdditionalObserv={additionalObservHandler}
          />
          <ObservationDescription
            style={observDescrShow}
            value={observationDescrip}
            onSelectObservDescription={observDescriptionHandler}
          />
          <Quantity
            style={show}
            value={quantity}
            onSelectQuantity={quantityHandler}
          />
          <EnteredDate
            lastDate={props.previousDay}
            isValidEntry={isValidEntryHandler}
            value={enteredDate}
            onSelectDate={dateHandler}
          />
          <button disable={disable} type="submit">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ObservationForm;

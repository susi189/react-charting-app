import React, { useState, useEffect } from "react";
import Record from "./components/Records/Record";
import Chart from "./components/Chart/Chart";
import Start from "./components/Home/Start";
import SelectedContext from "./components/store/selected-day";
import { supabase } from "./supabaseClient";
import "./components/Chart/Chart.css";

const dayObj = {
  cycleDay: 0,
  color: "",
  observation: "",
  additionalObserv: "",
  observationDescrip: "",
  quantity: "",
  date: "",
};

const App = () => {
  const [showChart, setShowChart] = useState(false);
  const [updateDay, setUpdateDay] = useState(false);
  const [lastDayNum, setLastDayNum] = useState("");
  const [cycle, setCycle] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const [day, setDay] = useState(dayObj);

  async function getDataHandler() {
    const { data } = await supabase
      .from("observations")
      .select("*")
      .order("id");

    const previousDay = data[data.length - 1];

    if (previousDay === undefined) {
      setLastDayNum(0);
      setDay(dayObj);
    } else {
      let lastCycleDay = previousDay.cycleDay;
      setLastDayNum(lastCycleDay);
    }
    setDay(previousDay);
    setCycle(data);
  }

  async function updateDataHandler(enteredDay) {
    await supabase
      .from("observations")
      .insert([
        {
          cycleDay: enteredDay.cycleDay,
          color: enteredDay.color,
          observation: enteredDay.observation,
          additionalObserv: enteredDay.additionalObserv,
          observationDescrip: enteredDay.observationDescrip,
          quantity: enteredDay.quantity,
          date: enteredDay.date,
        },
      ])
      .single();
    setDay(dayObj);
    getDataHandler();
  }

  //this is in progress function
  async function modifyDayHandler(enteredDay) {
    await supabase
      .from("observations")
      .update({
        cycleDay: enteredDay.cycleDay,
        color: enteredDay.color,
        observation: enteredDay.observation,
        additionalObserv: enteredDay.additionalObserv,
        observationDescrip: enteredDay.observationDescrip,
        quantity: enteredDay.quantity,
        date: enteredDay.date,
      })
      .match({
        id: selectedDay.id,
      });
    setDay(dayObj);
    getDataHandler();
  }

  const getSelectedDay = (selected) => {
    // console.log("App selected Day", selected);
    setSelectedDay(selected);
    setUpdateDay(true);
    getDataHandler();
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const renderChart = () => {
    setShowChart(true);
    // let daysTemp = createDays(35);
    // setTemplate(daysTemp);
    // createNewCycle();
    // setDays(days[0]);
  };

  // const updateCycleData = (d, id) => {
  //   setDay((previousDays) => {
  //     day[id] = d;
  //     console.log(day);
  //     return day;
  //   });
  // };

  return (
    <SelectedContext.Provider
      value={{
        isSelected: updateDay,
        isSelectedDay: selectedDay,
      }}
    >
      {!showChart && <Start onClickRender={renderChart}></Start>}
      {showChart && (
        <div>
          <Record
            lastCycleDayNum={lastDayNum}
            previousDay={day}
            onAddNewObserv={updateDataHandler}
            onAddModifiedObserv={modifyDayHandler}
          />
          <Chart
            getSelectedDay={getSelectedDay}
            cycleDaysData={cycle}
            lastCycleDay={lastDayNum}
          />
        </div>
      )}
    </SelectedContext.Provider>
  );
};

export default App;

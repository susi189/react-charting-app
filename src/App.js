import React, { useState, useEffect } from "react";
import Record from "./components/Records/Record";
import Chart from "./components/Chart/Chart";
import Beginn from "./components/Home/Beginn";
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
  const [cycleNum, setCycleNum] = useState(0);

  async function getCurrentCycleNumber() {
    const { data } = await supabase
      .from("observations")
      .select("cycleNum")
      .order("cycleNum", { ascending: false });

    let currentCycle = data[0].cycleNum;
    setCycleNum(currentCycle);
  }

  async function getDataHandler() {
    const { data } = await supabase
      .from("observations")
      .select("*")
      .eq("cycleNum", cycleNum.toString())
      .order("id");

    const previousDay = data[data.length - 1];
    if (previousDay === undefined) {
      setLastDayNum(0);
      setDay(dayObj);
    } else {
      let lastCycleDay = previousDay.cycleDay;
      setLastDayNum(lastCycleDay);
      setCycleNum(previousDay.cycleNum);
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
          cycleNum: cycleNum,
        },
      ])
      .single();
    setDay(dayObj);
    getDataHandler();
  }

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
    setSelectedDay(selected);
    setUpdateDay(true);
    getDataHandler();
  };

  const startNewCycle = () => {
    let currentCycleNum = cycleNum + 1;
    setCycleNum(currentCycleNum);
    setLastDayNum(0);
    setCycle([]);
  };

  const updateCycle = () => {
    getCurrentCycleNumber();
    getDataHandler();
  };

  const renderChart = () => {
    setShowChart(true);
  };

  useEffect(() => {
    getCurrentCycleNumber();
    getDataHandler();
  }, []);

  return (
    <SelectedContext.Provider
      value={{
        isSelected: updateDay,
        isSelectedDay: selectedDay,
      }}
    >
      {!showChart && (
        <Beginn
          onClickRender={renderChart}
          handleNewCycle={startNewCycle}
          handleCycleUpdate={updateCycle}
        ></Beginn>
      )}
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

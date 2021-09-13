import React, { useState, useEffect } from "react";
import Record from "./components/Records/Record";
import Chart from "./components/Chart";
import Start from "./components/Home/Start";
import { supabase } from "./supabaseClient";
import "./App.css";

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
  // const [loading, setLoading] = useState(true);
  const [lastDayNum, setLastDayNum] = useState("");
  const [cycle, setCycle] = useState([]);
  const [day, setDay] = useState(dayObj);

  async function getDataHandler() {
    const { data } = await supabase.from("observations").select("*");

    const previousDay = data[data.length - 1];
    if (previousDay === undefined) {
      setLastDayNum(0);
    } else {
      let lastCycleDay = previousDay.cycleDay;
      setLastDayNum(lastCycleDay);
    }
    setDay(previousDay);
    console.log("last day", day);
    setCycle(data);
    // console.log("data: ", previousDate);
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
          quantity: enteredDay.quantity,
          date: enteredDay.date,
        },
      ])
      .single();
    setDay(dayObj);
    getDataHandler();
  }

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
    <div>
      {!showChart && <Start onClickRender={renderChart}></Start>}
      {showChart && (
        <div>
          <Record
            lastCycleDayNum={lastDayNum}
            previousDay={day}
            onAddNewObserv={updateDataHandler}
          />
          <Chart cycleDaysData={cycle} lastCycleDay={lastDayNum} />
        </div>
      )}
    </div>
  );
};

export default App;

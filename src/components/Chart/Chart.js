import React from "react";
import Day from "./Day";
import EmptyDay from "./EmptyDay";
import { createDays } from "./template.js";

function Chart(props) {
  const templateDays = createDays(props.lastCycleDay, 35);

  const getDay = (day) => {
    props.getSelectedDay(day);
  };

  return (
    <section className="chart">
      {props.cycleDaysData.map((myDay) => {
        return <Day key={myDay.id} myDay={myDay} getDay={getDay} />;
      })}
      {templateDays.map((day) => {
        return <EmptyDay key={day.cycleDay} day={day} />;
      })}
    </section>
  );
}

export default Chart;

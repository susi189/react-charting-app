import React from "react";
import Day from "./Day";
import EmptyDay from "./EmptyDay";
import { createDays } from "./template.js";

function Chart(props) {
  // const getTemplateDataHandler = (data) => {
  //   props.getData(data);
  // };

  const templateDays = createDays(props.lastCycleDay, 35);

  return (
    <section className="chart">
      {props.cycleDaysData.map((myDay) => {
        return (
          <Day
            key={myDay.cycleDay}
            myDay={myDay}
            // lastCycleDay={props.lastCycleDay}
            // getTempData={getTemplateDataHandler}
          />
        );
      })}
      {templateDays.map((day) => {
        return <EmptyDay key={day.cycleDay} day={day} />;
      })}
    </section>
  );
}

export default Chart;

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import highchartsMore from "highcharts/highcharts-more";

import {
  abuDhabiYear,
  dammamYear,
  dubaiYear,
  jeddahYear,
  kuwaitYear,
  manamaYear,
  meccaYear,
  muscatYear,
  riyadhYear,
} from "../data/yearAverage";

highchartsMore(Highcharts);

const HighChartStatic: React.FC = () => {
  const options = {
    chart: {
      type: "spline",

    },
    title: {
      text: "GCC Average Temperature (1974-2022)",
      align: "left",
    },

    xAxis: {
      type: "datetime",
    },

    yAxis: {
      title: {
        text: null,
      },
    },

    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5,
          },
        },
        marker: {
          enabled: false,
        },
        pointStart: Date.UTC(1974, 0, 1),
        pointInterval: 365 * 24 * 3600 * 1000,
      },
    },
    series: [
      
      {
        name: "Kuwait City",
        data: kuwaitYear,
      },
      {
        name: "Mannama",
        data: manamaYear,
      },
      {
        name: "Muscat",
        data: muscatYear,
      },
      {
        name: "Mecca",
        data: meccaYear,
      },
      {
        name: "Riyadh",
        data: riyadhYear,
      },
      {
        name: "Dubai",
        data: dubaiYear,
      },
      {
        name: "Jeddah",
        data: jeddahYear,
      },
      {
        name: "Dammam",
        data: dammamYear,
      },
      {
        name: "Abu Dhabi",
        data: abuDhabiYear,
      },
    ],
  };
  return (
    <div style={{ width: "100%", }}>
      <HighchartsReact highcharts={Highcharts} options={options}   containerProps={{ style: { height: "600px" } }}/>
    </div>
  );
};

export default HighChartStatic;

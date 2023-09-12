import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import highchartsMore from "highcharts/highcharts-more";

import {

  abuDhabiAlltemperaturesAvgByMonth,
  abuDhabiAlltemperaturesRangesAvgByMonth,
} from "../data/abuDhabiData";

highchartsMore(Highcharts);

const HighChartStatic: React.FC = () => {
  const year = 1981;

  const options = {
    title: {
      text: "GCC Weather Data",
      align: "left",
    },

    xAxis: {
      type: "datetime",
      accessibility: {
        rangeDescription: "Range: Jul 1st 2022 to Jul 31st 2022.",
      },
    },

    yAxis: {
      title: {
        text: null,
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: "°C",
    },

    plotOptions: {
      series: {
        pointStart: Date.UTC(year, 1, 1),
        pointIntervalUnit: "month",
      },
    },

    series: [
      {
        name: "Temperature",
        data:abuDhabiAlltemperaturesAvgByMonth,
        zIndex: 1,
        lineColor: "green",
        marker: {
          fillColor: "white",
          lineWidth: 2,
          lineColor: "red",
        },
      },
      {
        name: "Range",
        data: abuDhabiAlltemperaturesRangesAvgByMonth,
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        color: "gray",
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false,
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighChartStatic;

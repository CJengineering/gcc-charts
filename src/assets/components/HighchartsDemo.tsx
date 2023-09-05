import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { averages, ranges } from "../data/data";
import highchartsMore from "highcharts/highcharts-more";
const options = {
  title: {
    text: "July temperatures in Nesbyen, 2022",
    align: "left",
  },

  subtitle: {
    text:
      "Source: " +
      '<a href="https://www.yr.no/nb/historikk/graf/1-113585/Norge/Viken/Nesbyen/Nesbyen?q=2022-07"' +
      'target="_blank">YR</a>',
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
      pointStart: Date.UTC(2023, 8, 1),
      pointIntervalUnit: "day",
    },
  },

  series: [
    {
      name: "Temperature",
      data: averages,
      zIndex: 1,
      marker: {
        fillColor: "white",
        lineWidth: 2,
        lineColor: "blue",
      },
    },
    {
      name: "Range",
      data: ranges,
      type: "arearange",
      lineWidth: 0,
      linkedTo: ":previous",
      color: "black",
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
        enabled: false,
      },
    },
  ],
};
highchartsMore(Highcharts);

const HighchartsDemo: React.FC = () => {
  return (
    <div>
 
   
          <HighchartsReact highcharts={Highcharts} options={options} />

  

    </div>
  );
};

export default HighchartsDemo;

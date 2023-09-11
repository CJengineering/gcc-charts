import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import highchartsMore from "highcharts/highcharts-more";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import {
  createPresentationMinMaxData,
  createPresentationWeatherData,
} from "../presentation/createPresentation";

import TabSelector from "./TabSelector";

highchartsMore(Highcharts);

const HighchartsDemo: React.FC = () => {
  const year = 2022;
  const presentationTemperatureAverage = useSelector(
    createPresentationWeatherData
  );
  const presentationMinMax = useSelector(createPresentationMinMaxData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchWeatherData(year));

    console.log("presentation Average ", presentationTemperatureAverage);

    console.log(
      "this is the dashboard presntation model useeffect : ",
      presentationMinMax
    );
  }, [year]);

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
        pointIntervalUnit: "day",
      },
    },

    series: [
      {
        name: "Temperature",
        data: presentationTemperatureAverage.weatherData,
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
        data: presentationMinMax,
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
      <TabSelector />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HighchartsDemo;

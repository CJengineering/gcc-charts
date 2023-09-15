import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import highchartsMore from "highcharts/highcharts-more";

import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import {
  createPresentationByWeek,
  createPresentationFormValue,
  createPresentationOpositeByWeek,
} from "../presentation/createPresentation";

import TabSelector from "./TabSelector";

import { fetchOpositWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";

import { useAppSelector } from "../hooks";

highchartsMore(Highcharts);

const HighchartsDemo: React.FC = () => {

  const [loading, setLoading] = React.useState(true);

  const presentationWeeklyBlue = useSelector(createPresentationByWeek);
  const presentationWeekly2 = useSelector(createPresentationOpositeByWeek);

  const dispatch = useDispatch();
  const prensentationForm = useAppSelector(createPresentationFormValue);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch<any>(fetchWeatherData(1990, 1, "Jeddah"));
      await dispatch<any>(fetchOpositWeatherData(2020, 1, "Jeddah"));
      setLoading(false);
    };
    fetchData();
  }, []);

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
    chart: {
      type: "line", // or any other chart type
      width: 1000, // Width in pixels
      height: 700, // Height in pixels
      // Alternatively, you can use percentages:
      // width: '80%', // 80% of the container width
      // height: '60%', // 60% of the container height
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
        pointStart: Date.UTC(prensentationForm.year, 1, 1),
        pointInterval: 7 * 24 * 60 * 60 * 1000, // one week
      },
    },

    series: [
      {
        name: `${prensentationForm.city},${prensentationForm.year} `,
        data: presentationWeeklyBlue,
        zIndex: 1,
        lineColor: "blue",
        marker: {
          fillColor: "blue",
          lineWidth: 2,
          lineColor: "blue",
        },
      },
      {
        name: `${prensentationForm.prevCity},${prensentationForm.prevYear} `,
        data: presentationWeekly2,
        zIndex: 1,
        lineColor: "red",
        marker: {
          fillColor: "red",
          lineWidth: 2,
          lineColor: "red",
        },
      },

      /*{
        name: "Range",
        data: presentationMinMax,
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        color: "blue",
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false,
        },
      },
      {
        name: "Range",
        data: presentationMinMax2,
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        color: "red",
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false,
        },
      },*/
    ],
  };
  return (
    <div className="highchart-container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <TabSelector />
          <div className="highchart_main">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </>
      )}
    </div>
  );
};

export default HighchartsDemo;

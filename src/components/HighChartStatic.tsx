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
  dohaYear,
} from "../data/yearAverage";

highchartsMore(Highcharts);

const HighChartStatic: React.FC = () => {
  const options = {
    chart: {
      type: "spline",
      backgroundColor:'transparent' 
    },
    title: {
      text: null,
      align: "left",
    },

    xAxis: {
      type: "datetime",
    },

    yAxis: {
      title: {
        text: null,
      },
    
      plotLines: [
        {
          value: 22, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 24, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 26, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 28, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 30, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 32, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        },
        {
          value: 34, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }]
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
      {
        name: "Doha",
        data: dohaYear,
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={options}   containerProps={{ style: { height: "600px" } }}/>
    </div>
  );
};

export default HighChartStatic;

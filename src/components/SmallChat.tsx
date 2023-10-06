import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMore from "highcharts/highcharts-more";
import { useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";

interface SmallCartProps {
  name: string;
  data: number[][];
  key: number;
}

highchartsMore(Highcharts);

const SmallCharts: React.FC<SmallCartProps> = ({ name , data}) => {
  const presentation = useAppSelector(createPresentationFormValue);

  const options = {
    title: {
      text: null,
      align: "left",
      fontSize: "2rem",
    },

    chart: {
      type: "spline",
      backgroundColor:'transparent' 
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
      min: 10.5,
      max: 50, 
      plotLines: [
        {
          value: 20, 
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
          value: 40, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 50, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        },

     
      ],
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: "°C",
    },

    plotOptions: {
      spline: {
        lineWidth: 4,
        color: 'green',
        states: {
          hover: {
            lineWidth: 5,
          },
        },
        marker: {
          enabled: false,
        },
        pointStart: Date.UTC(presentation.prevYear, 0, 1),
        pointInterval: 7 * 24 * 3600 * 1000,
      },
    },

    series: [
      {
        name: name,
        data: data,
        zIndex: 1,
        
      },
   
    ],
  };
  return (
    <>

      <div style={{ width: "100%", marginTop:'2rem' }}>
        <HighchartsReact key={data.length} highcharts={Highcharts} options={options} />
      </div>
    </>
  );
};

export default SmallCharts;

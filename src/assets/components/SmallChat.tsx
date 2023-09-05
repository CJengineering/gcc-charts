import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { averages, averagesSecond} from "../data/data";
import highchartsMore from "highcharts/highcharts-more";

interface SmallCartProps {
    name: string;
}

highchartsMore(Highcharts);

const SmallCharts: React.FC<SmallCartProps> = ({name}) => {
    const options = {
        title: {
          text: name,
          align: "left",
        },
      
        chart: {
          type: 'line', // or any other chart type
          width: 400, // Width in pixels
          height: 200, // Height in pixels
          // Alternatively, you can use percentages:
          // width: '80%', // 80% of the container width
          // height: '60%', // 60% of the container height
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
              lineColor: "black",
            },
          },
          {
            name: "Range",
            data: averagesSecond,
            zIndex: 2,
            marker: {
              fillColor: "white",
              lineWidth: 2,
              lineColor: "green",
            },
          },
        ],
      };
  return (
    <>
 
   
          <HighchartsReact highcharts={Highcharts} options={options} />

  

    </>
  );
};

export default SmallCharts;

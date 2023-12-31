import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import highchartsMore from "highcharts/highcharts-more";

import { useSelector } from "react-redux";
import {
  createPresentationByWeek,
  createPresentationFormValue,
  createPresentationKeyValue,
  createPresentationOpositeByWeek,
} from "../presentation/createPresentation";

import { useAppSelector } from "../hooks";

highchartsMore(Highcharts);

const MobileHighchartsDemo: React.FC = () => {
  const keyValue = useAppSelector(createPresentationKeyValue);
  const presentation = useAppSelector(createPresentationFormValue);
  const presentationWeeklyBlue = useSelector(createPresentationByWeek);
  const presentationWeekly2 = useSelector(createPresentationOpositeByWeek);

  const prensentationForm = useAppSelector(createPresentationFormValue);

  const options = {
    title: {
      text: null,
      align: "left",
    },
    chart: {
      type: "spline",
      backgroundColor:'transparent' 
    },

    xAxis: {
      type: "datetime",
      accessibility: {
      },
    },

    yAxis: {
      title: {
        text: null,
      },
      min: 10.5,
      max: 40, 
      plotLines: [
        {
          value: 15, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 20, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }, {
          value: 25, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        },{
          value: 30, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        },{
          value: 35, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        },{
          value: 40, 
          color: 'black', 
          dashStyle: 'dot', 
          width: 2, 
          zIndex: 5, 
        }]
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: "°C",
    },

    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        marker: {
          enabled: false,
        },
        pointStart: Date.UTC(presentation.year, 0, 1),
        pointInterval: 7 * 24 * 3600 * 1000,
      },
    },

    series: [
      {
        name: `${prensentationForm.city},${prensentationForm.year} `,
        data: presentationWeeklyBlue,
        zIndex: 1,
      
       
      },
      {
        name: `${prensentationForm.prevCity},${prensentationForm.year} `,
        data: presentationWeekly2,
        zIndex: 1,
        color: "green",
     
      
      },
    ],
  };

  return (
    <>

<style>
    {` .chart-container-small {
          display: none;
        }
      @media (max-width: 600px) {
        .chart-container-small {
          display: block;
       
      }
    `}
  </style>
      <div  className="chart-container-small " style={{width:'auto' }}>
        <HighchartsReact
          key={keyValue}
          highcharts={Highcharts}
          containerProps={{ style: { height: "400px", width:'360px' } }}
          updateArgs={[true]}
          options={options}
        />
      </div>
    </>
  );
};

export default MobileHighchartsDemo;

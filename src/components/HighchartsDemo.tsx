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

const HighchartsDemo: React.FC = () => {
  const keyValue = useAppSelector(createPresentationKeyValue);
  const presentation = useAppSelector(createPresentationFormValue);
  const presentationWeeklyBlue = useSelector(createPresentationByWeek);
  const presentationWeekly2 = useSelector(createPresentationOpositeByWeek);

  const prensentationForm = useAppSelector(createPresentationFormValue);

  const options = {
    title: {
      text: "GCC Weather Data",
      align: "left",
    },
    chart: {
      type: "spline",
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
        pointStart: Date.UTC(presentation.year, 0, 1),
        pointInterval: 7 * 24 * 3600 * 1000,
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
    ],
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <HighchartsReact
          key={keyValue}
          highcharts={Highcharts}
          containerProps={{ style: { height: "600px" } }}
          updateArgs={[true]}
          options={options}
        />
      </div>
    </>
  );
};

export default HighchartsDemo;

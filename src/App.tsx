import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const options = {
    chart: {
      type: "bar", // You can change the chart type (e.g., 'line', 'pie', etc.)
    },
    title: {
      text: "Basic Highcharts Example", // Chart title
    },
    xAxis: {
      categories: ["Category 1", "Category 2", "Category 3"], // X-axis categories
    },
    yAxis: {
      title: {
        text: "Value", // Y-axis label
      },
    },
    series: [
      {
        name: "Series 1", // Series name
        data: [10, 20, 30], // Data points for the series
      },
    ],
  };
  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

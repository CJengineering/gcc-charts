import HighChartStatic from "./components/HighChartStatic";
import HighchartsDemo from "./components/HighchartsDemo";
import SmallCharts from "./components/SmallChat";
import WebflowHTML from "./components/WebflowHTML";

function App() {
  return (
    <>
    <WebflowHTML />
    <div className="container">
         <div className="chart-main-container">
        <HighChartStatic />
      </div>
      <div className="chart-main-container">
        <HighchartsDemo />
      </div>
      <div className="padding-vertical padding-big"></div>
      <h2>Cities H2 in React </h2>
      <div className="grid-container">
        <div className="grid-item">
          <SmallCharts name="Dubai" />
        </div>
        <div className="grid-item">
          <SmallCharts name="Doha" />
        </div>
        <div className="grid-item">
          <SmallCharts name="Riyadh" />
        </div>
        <div className="grid-item">
          <SmallCharts name="Mecca" />
        </div>
        <div className="grid-item">
          <SmallCharts name="Muscat" />
        </div>
        <div className="grid-item">
          <SmallCharts name=" Abu Dhabi" />
        </div>
        <div className="grid-item">
          <SmallCharts name="Dammam" />
        </div>
        <div className="grid-item">
          <SmallCharts name="Kuwait City" />
        </div>
        <div className="grid-item">
          <SmallCharts name=" Manama" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

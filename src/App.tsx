import HighchartsDemo from "./assets/components/HighchartsDemo";
import SmallCharts from "./assets/components/SmallChat";

function App() {
  return (
    <>
      <div className="chart-main-container">
        <HighchartsDemo />
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <SmallCharts name='Dubai' />
        </div>
        <div className="grid-item">
          <SmallCharts name='Doha'/>
        </div>
        <div className="grid-item">
          <SmallCharts name='Riyadh'/>
        </div>
        <div className="grid-item">
          <SmallCharts name='Mecca'/>
        </div>
        <div className="grid-item">
          <SmallCharts name='Muscat'/>
        </div>
        <div className="grid-item">
          <SmallCharts name=' Abu Dhabi'/>
        </div>
        <div className="grid-item">
          <SmallCharts name='Dammam'/>
        </div>
        <div className="grid-item">
          <SmallCharts name='Kuwait City'/>
        </div>
        <div className="grid-item">
          <SmallCharts name=' Manama'/>
        </div>
      </div>
    </>
  );
}

export default App;

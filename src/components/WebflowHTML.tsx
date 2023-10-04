import HighChartStatic from "./HighChartStatic";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import HighchartsDemo from "./HighchartsDemo";
import { useAppDispatch } from "../hooks";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import { fetchOpositWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";
import TabSelector from "./TabSelector";

export default function WebflowHTML() {
  const [value, setValue] = useState("1");
const dispatch= useAppDispatch()
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    const fetchData = async () => {
     
      await dispatch<any>(fetchWeatherData(1990, 1, "Jeddah"));
      await dispatch<any>(fetchOpositWeatherData(2020, 1, "Jeddah"));
     
    };
    fetchData();
  }, []);
  return (
    <div>
      <main className="main-wrapper">
        <section className="section-gcc-tracker-main-graph">
          <div className="page-padding">
            <div className="container wide">
              <div className="padding-vertical padding-large">
                <div
                  data-current="Tab 2"
                  data-easing="ease"
                  data-duration-in="300"
                  data-duration-out="100"
                  className="tabs media w-tabs"
                >
                  <div className="tabs menu media w-tab-menu">
                    <Box sx={{ width: "100%" }}>
                      <TabContext value={value}   >
                        <Box sx={{display:'flex', justifyContent:'center' }}>
                          <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                          >
                            <Tab label="All cities" value="1" />
                            <Tab label="City VS City" value="2" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <div className="div-main-graph">
                            <HighChartStatic />
                          </div>
                        </TabPanel>
                        <TabPanel value="2">
                          <TabSelector/>
                          <div className="div-main-graph">
                            <HighchartsDemo />
                          </div>
                        </TabPanel>
                      </TabContext>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-horizontal-divider">
          <div className="page-padding">
            <div className="padding-vertical padding-medium">
              <div className="container">
                <div className="container horizontal-divider"></div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-gcc-tracker-table">
          <div className="page-padding">
            <div className="container wide">
              <div className="padding-vertical padding-large">
                <table className="table_component">
                  <thead className="table_head">
                    <tr className="table_row">
                      <th className="table_header">City</th>
                      <th className="table_header">AVG. Temperature (1981)</th>
                      <th className="table_header">AVG. Temperature (2023)</th>
                      <th className="table_header">CHANGE (°C, %)</th>
                    </tr>
                  </thead>
                  <tbody className="table_body">
                    <tr className="table_row">
                      <td className="table_cell">Abu Dhabi</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">+4°% (+14%)</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Dammam</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Doha</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Dubai</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Jeddah</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Kuwait City</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Manama</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Mecca</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Muscat</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                    <tr className="table_row">
                      <td className="table_cell">Riyadh</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                      <td className="table_cell">Cell</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <div className="section-horizontal-divider">
          <div className="page-padding">
            <div className="padding-vertical padding-medium">
              <div className="container">
                <div className="container horizontal-divider"></div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-gcc-tracker-all-cities">
          <div className="page-padding">
            <div className="container wide">
              <div className="padding-vertical padding-large">
                <div className="padding-bottom padding-medium">
                  <h1 className="header ibm-sans h2">
                    How do cities in the Gulf compare with each other?
                  </h1>
                </div>
                <div className="padding-vertical">
                  <div className="w-layout-grid grid-gcc-tracker-cities">
                    <div
                      id="w-node-b6852b1d-e511-39ca-7506-f6411d6cf8bd-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Abu Dhabi</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-_7da11976-e987-b96f-c6cc-2983b4e5dec0-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Dammam</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-_1e84ea36-a9b2-921f-33d6-1c38c331c560-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Doha</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-_59733568-9157-170f-6d7f-5c6cc9ac265f-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Dubai</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-_6f739fa1-d13b-ca16-d1db-f3028d6146d5-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Jeddah</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-fe40aebe-fdec-fe6f-432c-3d960488ad85-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Kuwait City</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-_5fe3bb15-c066-3439-b17b-4669353fa56d-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Manama</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-eb7199c3-f1a3-140f-8c06-1f252de14e62-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Mecca</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-_6042986e-6d8a-d692-34a4-30edb2538ca0-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Muscat</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                    <div
                      id="w-node-d6eff4de-2211-fa26-8dc6-bda9cf4de5e5-b3a8f140"
                      className="wrapper-gcc-tracker-city-graph"
                    >
                      <h1 className="header ibm-sans h3">Riyadh</h1>
                      <div className="gcc-tracker-city-graph"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import HighChartStatic from "./HighChartStatic";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import HighchartsDemo from "./HighchartsDemo";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import { fetchOpositeWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";
import TabSelector from "./TabSelector";
import SmallCharts from "./SmallChat";
import { fetchDubaiData } from "../useCase/fetchDubaiData/fetchDubaiData";
import { fetchManamaData } from "../useCase/fetchManamaData/fetchManamaData";
import { fetchDammamData } from "../useCase/fetchDammamData/fetchDammamData";
import { fetchJeddahData } from "../useCase/fetchJeddahData/fetchJeddahData";
import { fetchMeccaData } from "../useCase/fetchMeccaData/fetchMeccaData";
import { fetchMuscatData } from "../useCase/fetchMuscatData/fetchMuscatData";
import { fetchRiyadhData } from "../useCase/fetchRiyadhData/fetchRiyadhData";
import { createPresentationDubaiByWeek } from "../useCase/fetchDubaiData/createPresentation";
import { createPresentationFormValue } from "../presentation/createPresentation";
import { createPresentationRiyadhByWeek } from "../useCase/fetchRiyadhData/createPresentation";
import { createPresentationMeccaByWeek } from "../useCase/fetchMeccaData/createPresentation";
import { createPresentationJeddahByWeek } from "../useCase/fetchJeddahData/createPresentation";
import { createPresentationMuscatByWeek } from "../useCase/fetchMuscatData/createPresentation";
import { createPresentationKuwaitCityByWeek } from "../useCase/fetchKuwaitCityData/createPresentation";
import { createPresentationDammamByWeek } from "../useCase/fetchDammamData/createPresentation";
import { fetchKuwaitCityData } from "../useCase/fetchKuwaitCityData/fetchKuwaitCityData";
import PrevYearSelector from "./prevYearSelector";
import { fetchAbuDhabiData } from "../useCase/fetchAbuDhabiData/fetchAbuDhabiData";
import { createPresentationAbuDhabiByWeek } from "../useCase/fetchAbuDhabiData/createPresentation";
import { fetchDohaData } from "../useCase/fetchDohaData/fetchDohaData";
import { createPresentationDohaByWeek } from "../useCase/fetchDohaData/createPresentation";
import { createPresentationManamaByWeek } from "../useCase/fetchManamaData/createPresentation";
import MobileHighchartsDemo from "./MobileHighchartsDemo";
import MobileHighChartStatic from "./MobileHighchartsStatic";

export default function WebflowHTML() {
  const [value, setValue] = useState("1");
  const presentation = useAppSelector(createPresentationFormValue);

  const dubaiData = useAppSelector(createPresentationDubaiByWeek);
  const riyadhData = useAppSelector(createPresentationRiyadhByWeek);
  const meccaData = useAppSelector(createPresentationMeccaByWeek);
  const jeddahData = useAppSelector(createPresentationJeddahByWeek);
  const muscatData = useAppSelector(createPresentationMuscatByWeek);
  const kuwaitCityData = useAppSelector(createPresentationKuwaitCityByWeek);
  const dammamData = useAppSelector(createPresentationDammamByWeek);
  const manamaData = useAppSelector(createPresentationManamaByWeek);
  const dohaData = useAppSelector(createPresentationDohaByWeek);
  const abuDhabiData = useAppSelector(createPresentationAbuDhabiByWeek);
  const dispatch = useAppDispatch();
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    const fetchDataAll = async () => {
      await dispatch<any>(fetchWeatherData(1990, 1, "Jeddah"));
      await dispatch<any>(fetchOpositeWeatherData(2020, 1, "Jeddah"));
    };
    fetchDataAll();
  }, []);
  useEffect(() => {
    const fetchDataSmall = async () => {
      await dispatch<any>(fetchManamaData(presentation.prevYear, 1, "Manama"));
      await dispatch<any>(fetchDubaiData(presentation.prevYear, 1, "Dubai"));
      await dispatch<any>(fetchDammamData(presentation.prevYear, 1, "Dammam"));
      await dispatch<any>(fetchJeddahData(presentation.prevYear, 1, "Jeddah"));
      await dispatch<any>(fetchMeccaData(presentation.prevYear, 1, "Mecca"));
      await dispatch<any>(fetchMuscatData(presentation.prevYear, 1, "Muscat"));
      await dispatch<any>(fetchRiyadhData(presentation.prevYear, 1, "Riyadh"));
      await dispatch<any>(
        fetchAbuDhabiData(presentation.prevYear, 1, "Abu Dhabi")
      );
      await dispatch<any>(
        fetchKuwaitCityData(presentation.prevYear, 1, "Kuwait City")
      );
      await dispatch<any>(fetchDohaData(presentation.prevYear, 1, "Doha"));
    };
    fetchDataSmall();
  }, [presentation.prevYear]);
  const smallChartObject = {
    Dubai: dubaiData,
    Riyadh: riyadhData,
    Mecca: meccaData,
    Jeddah: jeddahData,
    Muscat: muscatData,
    "Kuwait City": kuwaitCityData,
    Dammam: dammamData,
    "Abu Dhabi": abuDhabiData,
    Doha: dohaData,
    Manama: manamaData,
  };
  return (
    <>
      <style>
        {` .title-container {
          display: flex;
          justify-content: space-between;
        }
      @media (max-width: 600px) {
        .title-container {
          display: block;
       
      }
    `}
      </style>
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
                    <TabContext value={value}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                        >
                          <Tab label="All cities" value="1" />
                          <Tab label="City VS City" value="2" />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <h1
                          className="header ibm-sans h2"
                          style={{ marginBottom: "24px", marginTop: "24px" }}
                        >
                          Average annual temperatures across the GCC
                        </h1>

                        <div className="div-main-graph">
                          <MobileHighChartStatic />
                          <HighChartStatic />
                        </div>
                      </TabPanel>
                      <TabPanel value="2">
                        <h1
                          className="header ibm-sans h2"
                          style={{ marginBottom: "24px", marginTop: "24px" }}
                        >
                          Compare the average monthly temperature of two cities
                          in GCC
                        </h1>
                        <TabSelector />
                        <div className="div-main-graph">
                          <HighchartsDemo />
                          <MobileHighchartsDemo />
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

      <section className="section-gcc-tracker-table">
        <div className="page-padding">
          <div className="container wide">
            <h1 className="header ibm-sans h2">
              Has the temperature in the GCC's major cities increased or
              decreased since 1981?
            </h1>
            <div className="padding-vertical padding-large">
              <table className="table_component">
                <thead className="table_head">
                  <tr className="table_row">
                    <th className="table_header">City</th>
                    <th className="table_header">AVG. Temperature 1982 (°C)</th>
                    <th className="table_header">AVG. Temperature 2022 (°C)</th>
                    <th className="table_header">CHANGE (°C, %)</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  <tr className="table_row">
                    <td className="table_cell">Abu Dhabi</td>
                    <td className="table_cell">24.78</td>
                    <td className="table_cell"> 29.41</td>
                    <td className="table_cell">
                   
                      <div className="table-hot-t">+4.8 (+18.7%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Dammam</td>
                    <td className="table_cell"> 25.46</td>
                    <td className="table_cell">27.97</td>
                    <td className="table_cell">
                      <div className="table-hot-t">+2.5 (+9.8%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Doha</td>
                    <td className="table_cell">25.93</td>
                    <td className="table_cell">28.6</td>
                    <td className="table_cell">
                      {" "}
                      <div className="table-hot-t">+2.67 (+10.29%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Dubai</td>
                    <td className="table_cell">26.26</td>
                    <td className="table_cell">29.90</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+3.6 (+13.8%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Jeddah</td>
                    <td className="table_cell">28.67</td>
                    <td className="table_cell">29.59</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+0.9 (+3.2%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Kuwait City</td>
                    <td className="table_cell">26.99</td>
                    <td className="table_cell">28.24</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+1.25 (+4.6%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Manama</td>
                    <td className="table_cell">25.81</td>
                    <td className="table_cell">28.21</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+2.4 (+9.29%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Mecca</td>
                    <td className="table_cell">26.64</td>
                    <td className="table_cell">28.12</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+1.44 (+5.6%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Muscat</td>
                    <td className="table_cell">28.3</td>
                    <td className="table_cell">29.0</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+0.69 (+2.4%)</div>
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="table_cell">Riyadh</td>
                    <td className="table_cell">25.55</td>
                    <td className="table_cell">27.55</td>

                    <td className="table_cell">
                      <div className="table-hot-t">+2 (+7.8%)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gcc-tracker-all-cities">
        <div className="page-padding">
          <div className="container wide">
            <div className="padding-vertical padding-large">
              <div className="padding-bottom padding-medium">
                <div className="title-container">
                  <h1 className="header ibm-sans h2">
                    How do temperatures in the GCC's major cities compare with
                    each other?
                  </h1>
                  <PrevYearSelector />
                </div>
              </div>
              <div className="padding-vertical">
                <div className="w-layout-grid grid-gcc-tracker-cities">
                  {Object.entries(smallChartObject).map(
                    ([city, data], index) => (
                      <div
                        id="w-node-b6852b1d-e511-39ca-7506-f6411d6cf8bd-b3a8f140"
                        key={index}
                        className="wrapper-gcc-tracker-city-graph"
                      >
                        <h1 className="header ibm-sans h3">{city}</h1>
                        <div className="gcc-tracker-city-graph">
                          <SmallCharts
                            name={city}
                            data={data}
                            key={presentation.prevYear + index}
                          ></SmallCharts>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

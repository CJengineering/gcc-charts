import React, { useState } from "react";

import CitySelector from "./CitySelector";
import MonthSelector from "./MonthSelector";
import { Box, Tab, Tabs } from "@mui/material";
import YearSelector from "./YearSelector";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import { fetchOpositWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  
 

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const TabSelector: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const prensentationForm = useAppSelector(createPresentationFormValue)
  const dispatch= useAppDispatch()
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };
  const compareData = async () => {
    await dispatch<any>(
      fetchOpositWeatherData(
        prensentationForm.prevYear,
        prensentationForm.prevMonth,
        prensentationForm.prevCity
      )
    );
    await dispatch<any>(
      fetchWeatherData(
        prensentationForm.year,
        prensentationForm.month,
        prensentationForm.city
      )
    );
 
  };
  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Per Year" />
        <Tab label="Per Month" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <div className="date-comparative_container">
          <div className="date-picker-form_container">
            <YearSelector prev={false} />
            <CitySelector prev={false} />
          </div>
          <div>VS</div>
          <div className="date-picker-form_container">
            <YearSelector prev={true}/>
            <CitySelector  prev={true} />
          </div>
        <button onClick={compareData}>Compare </button>
        </div>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <div className="date-comparative_container">
          <div className="date-picker-form_container">
            <MonthSelector prev={false} />
            <YearSelector  prev={false} />
            <CitySelector prev={false}/>
          </div>

          <div>VS</div>
          <div className="date-picker-form_container">
            <MonthSelector prev={true} />
            <YearSelector prev={true}/>
            <CitySelector prev={true} />
          </div>
        </div>
      </TabPanel>
    </div>
  );
};

export default TabSelector;

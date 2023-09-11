import React, { useState } from "react";

import CitySelector from "./CitySelector";
import MonthSelector from "./MonthSelector";
import { Box, Tab, Tabs } from "@mui/material";
import YearSelector from "./YearSelector";

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

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);

  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} centered>
        <Tab label="Per Year" />
        <Tab label="Per Month" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
      <div className="date-picker-form_container">
     
        <YearSelector/>
        <CitySelector/>
      </div>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
      <div className="date-picker-form_container">
        <MonthSelector/>
        <YearSelector/>
        <CitySelector/>
      </div>
      </TabPanel>
    </div>
  );
};

export default TabSelector;

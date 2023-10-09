import React from "react";

import CitySelector from "./CitySelector";

import { Button } from "@mui/material";
import YearSelector from "./YearSelector";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import { selectedKeyValue } from "../useCase/keyValue/keyValueSlice";
import { fetchOpositeWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";
import TestSelectorMUI from "./testSelectorMUI";

const TabSelector: React.FC = () => {
  const prensentationForm = useAppSelector(createPresentationFormValue);
  const dispatch = useAppDispatch();

  const compareData = async () => {
    await dispatch<any>(
      fetchOpositeWeatherData(
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
    dispatch(selectedKeyValue(Math.random()));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", justifyContent: "center", width: "50%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "1rem",
            alignItems: "center",
            marginBottom: "24px",
       
            
          }}
        >
          <CitySelector prev={false} />
          <div >VS</div>

          <CitySelector prev={true} />
        <YearSelector />
        <TestSelectorMUI/>
        <Button onClick={compareData} variant="contained" style={{ height:'2.475rem' }}>
          Compare
        </Button>
        </div>

      </div>
    
    </div>
  );
};

export default TabSelector;

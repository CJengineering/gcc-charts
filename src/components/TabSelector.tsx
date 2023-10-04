import React from "react";

import CitySelector from "./CitySelector";

import { Button} from "@mui/material";
import YearSelector from "./YearSelector";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import { fetchOpositWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import { selectedKeyValue } from "../useCase/keyValue/keyValueSlice";


const TabSelector: React.FC = () => {
  const prensentationForm = useAppSelector(createPresentationFormValue);
  const dispatch = useAppDispatch();

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
    dispatch(selectedKeyValue(Math.random()));
  };

  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      <div style={{ display: "flex",justifyContent:'center', width:'50%' }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: "1rem",
            alignItems: "center",
          }}
        >
          <CitySelector prev={false} />
          <div style={{ marginLeft: "1rem" }}>VS</div>

          <CitySelector prev={true} />
        </div>

   
      </div>
      <div style={{ display: "flex",width:'50%',justifyContent:'center' }}>
  
          <YearSelector />
  
      </div>
      <Button onClick={compareData} style={{ marginLeft: "1rem" }}>
          Compare{" "}
        </Button>
    </div>
  );
};

export default TabSelector;

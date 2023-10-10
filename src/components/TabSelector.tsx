import React from "react";

import CitySelector from "./CitySelector";

import { Button } from "@mui/material";
import YearSelector from "./YearSelector";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import { fetchWeatherData } from "../useCase/fetchWeatherData/fetchWeatherData";
import { selectedKeyValue } from "../useCase/keyValue/keyValueSlice";
import { fetchOpositeWeatherData } from "../useCase/fetchOpositeWeatherData/fetchOpositeWeatherData";

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
    <>
      <style>
        {`
        .selector-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .selectors-wrapper {
          display: flex;
          justify-content: center;
          width: 50%;
        }
        .groupcity {
          display: flex;
         align-items: center;
          direction: row;
          column-gap: 1rem;
        }
        .selector-group {
          display: flex;
          justify-content: center;
          column-gap: 1rem; /* Adjusted gap */
          align-items: center;
          margin-bottom: 12px; /* Adjusted margin */
        }

        .selector-group > * {
          font-size: 0.8rem; /* Adjusted font size */
        }

        .compare-button {
          height: 2.3rem; /* Adjusted height */
          font-size: 0.8rem; /* Adjusted font size */
          padding: 0.5rem 1rem; /* Adjusted padding */
        }

        @media (max-width: 768px) {
          .selector-group {
            flex-direction:column;
            align-items: center;
          }
        
          .selector-group > * {
            margin-bottom: 6px; /* Adjusted margin */
          }
        }
      `}
      </style>

      <div className="selector-container">
        <div className="selectors-wrapper">
          <div className="selector-group">
            <div className="groupcity" >
              <CitySelector prev={false} />
              <div>VS</div>
              <CitySelector prev={true} />
            </div>
            <YearSelector />
            <Button
              onClick={compareData}
              variant="contained"
              className="compare-button"
            >
              Compare
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabSelector;

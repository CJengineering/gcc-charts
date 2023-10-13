import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import {
  updateCity,
  updatePrevCity,
} from "../useCase/formValue/formValueSlice";
import { PropsSelctor } from "../interfaces";

const CitySelector: React.FC<PropsSelctor> = (prev) => {
  const dispatch = useAppDispatch();
  const presentation = useAppSelector(createPresentationFormValue);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value;
    console.log("see the prev", prev);
    dispatch(updateCity(newCity));
  };
  const handlePrevChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value;

    dispatch(updatePrevCity(newCity));
  };
  const cities = [
    "Jeddah",
    "Dubai",
    "Riyadh",
    "Mecca",
    "Muscat",
    "Abu Dhabi",
    "Dammam",
    "Kuwait City",
    "Manama",
    "Doha",
  ];

  return (
    <div>
        <style>
        {`
          .city-selector {
            min-width: 120px;
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ced4da;
            border-radius: 4px;
            background-color: white;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
           
          }
          @media (max-width: 600px) {
            .city-selector {
              min-width: 40px; 
              padding: 3px; 
              font-size: 14px; 
              width: 150px;
            }
          }
        `}
      </style>
       <select
        value={prev.prev ? presentation.prevCity : presentation.city}
        onChange={prev.prev ? handlePrevChange : handleChange}
        className="city-selector"
      >
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    
    </div>
  );
};

export default CitySelector;

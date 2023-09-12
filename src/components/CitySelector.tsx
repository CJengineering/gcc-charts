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
    console.log("see the prev", prev)
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
      <select
        id="cityInput"
        value={prev.prev ? presentation.city : presentation.prevCity}
        onChange={prev.prev ? handleChange : handlePrevChange}
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

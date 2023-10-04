import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { createPresentationFormValue } from "../presentation/createPresentation";
import {
  updateCity,
  updatePrevCity,
} from "../useCase/formValue/formValueSlice";
import { PropsSelctor } from "../interfaces";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const CitySelector: React.FC<PropsSelctor> = (prev) => {
  const dispatch = useAppDispatch();
  const presentation = useAppSelector(createPresentationFormValue);
  const handleChange = (event: SelectChangeEvent) => {
    const newCity = event.target.value;
    console.log("see the prev", prev);
    dispatch(updateCity(newCity));
  };
  const handlePrevChange = (event: SelectChangeEvent) => {
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
      <FormControl
        fullWidth
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
        size="small"
      >
        <Select
          value={prev.prev ? presentation.prevCity : presentation.city}
          onChange={prev.prev ? handlePrevChange : handleChange}
        >
          {cities.map((city, index) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
    </div>
  );
};

export default CitySelector;

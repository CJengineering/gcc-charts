import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updatePrevYear, updateYear } from "../useCase/formValue/formValueSlice";

import { createPresentationFormValue } from "../presentation/createPresentation";
import { FormControl, MenuItem, Select } from "@mui/material";

const YearSelector: React.FC = ()=> {
  const dispatch = useAppDispatch();
  const presentation = useAppSelector(createPresentationFormValue);
  const handleChange = (event: SelectChangeEvent<number>) => {
    const newYear = event.target.value as number;
    
      dispatch(updatePrevYear(newYear));
    
     dispatch(updateYear(newYear));
  };

  return (

    <FormControl  variant="outlined" sx={{ m: 1, minWidth: 120 }} size="small">
   
        <Select
          label="Year"
          id="yearSelect"
          value={presentation.year}
          onChange={handleChange}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
          
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
       
        >
          {Array.from({ length: 2024 - 1972 }, (_, i) => 1973 + i).map(
            (year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>

  );
};
export default YearSelector;

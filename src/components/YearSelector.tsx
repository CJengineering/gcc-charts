import React, { ChangeEvent } from "react";
import { useAppDispatch} from "../hooks";
import {

  updateYear,
} from "../useCase/formValue/formValueSlice";


const YearSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value);

    dispatch(updateYear(newYear));
  };

  return (
    <>
  
      <select
        id="yearSelect"
        onChange={handleChange}
    
        style={{
          minWidth: "120px",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          backgroundColor: "white",
          backgroundImage: "none",
          boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075)",
        }}
      >
        {Array.from({ length: 2022 - 1974 }, (_, i) => 2022 - i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};
export default YearSelector;

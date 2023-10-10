import React, { ChangeEvent } from "react";
import { useAppDispatch } from "../hooks";
import { updateYear } from "../useCase/formValue/formValueSlice";

const YearSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(event.target.value);

    dispatch(updateYear(newYear));
  };

  return (
    <>
      <style>
        {`
        .year-selector {
          min-width: 120px;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background-color: white;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }

        @media (max-width: 768px) {
          .year-selector {
            min-width: 40px;
            padding: 3px;
            font-size: 14px;
          }
        }
      `}
      </style>

      <select id="yearSelect" onChange={handleChange} className="year-selector">
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

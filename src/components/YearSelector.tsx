import React, { ChangeEvent } from "react";

const YearSelector: React.FC = () => {

 const year = 2022

  const handleYear = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(parseInt(event.target.value, 10));
  };

  return (
    <div>
  
      <input
        type="number"
        id="yearInput"
        min="1973"
        max="2023"
        value={year}
        onChange={handleYear}
      />

    </div>
  );
};
export default YearSelector
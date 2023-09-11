import React, { ChangeEvent} from "react";

const MonthSelector: React.FC = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = 1

  const handleMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(parseInt(event.target.value, 10));
  };

  return (
    <div>
    
      <select
        id="monthInput"
        value={month}
        onChange={handleMonth}
      >
        {monthNames.map((name, index) => (
          <option key={index} value={index + 1}>{name}</option>
        ))}
      </select>
    
    </div>
  );
};

export default MonthSelector;

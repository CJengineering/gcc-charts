import React, { ChangeEvent } from "react";

const CitySelector: React.FC = () => {
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

  const selectedCity = 0;

  const handleCity = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <select
        id="cityInput"
        value={selectedCity}
        onChange={handleCity}
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

import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
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
const years = Array.from({ length: 51 }, (_, index) => 1973 + index); // Generate an array of years from 1973 to 2023

const months = [
  "Only year",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const WeatherDataForm: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedMonth, setSelectedMonth] = useState<number | string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const handleYearChange = (event: SelectChangeEvent<string>) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event: SelectChangeEvent<number | string>) => {
    setSelectedMonth(event.target.value as number | string);
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const constructWeatherURL = () => {
    let url = "www.dataweather.com/weatherdata?";

    if (selectedYear) {
      url += `year=${selectedYear}`;
      if (selectedMonth !== "Only Year") {
        url += `&month=${selectedMonth}`;
        if (selectedDate) {
          url += `&date=${selectedDate}`;
        }
      }
    }

    if (selectedCity) {
      url += `&city=${selectedCity}`;
    }

    return url;
  };

  const handleSubmit = () => {
    const weatherURL = constructWeatherURL();
    // You can perform further actions here, like sending a request to the constructed URL.
    console.log("Constructed URL:", weatherURL);
  };

  return (
    <>
      <div className="weather-form-container">
        <div className="weather-form-item">
          <FormControl fullWidth>
            <InputLabel>Select City</InputLabel>
            <Select value={selectedCity} onChange={handleCityChange}>
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="weather-form-item">
          <FormControl fullWidth>
            <InputLabel>Select Year</InputLabel>
            <Select value={selectedYear} onChange={handleYearChange}>
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="weather-form-item">
          <FormControl fullWidth>
            <InputLabel>Select Month</InputLabel>
            <Select value={selectedMonth} onChange={handleMonthChange}>
              {months.map((month, index) => (
                <MenuItem key={month} value={index + 1}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="weather-form-item">
          <TextField
            type="date"
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="weather-form-item">
          <Button
            variant="contained"
           
            color="secondary"
            onClick={handleSubmit}
          >
            apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default WeatherDataForm;

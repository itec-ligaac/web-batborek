import React, { useContext, useState, useMemo } from "react";
import { UserContext } from "../context/core";
import Select from "react-select";
import countryList from "react-select-country-list";

export const MainPage = () => {
  const options = useMemo(() => countryList().getData(), []);

  const {
    todayCase,
    setTodayCase,
    cities,
    setCities,
    city,
    setCity,
    hotels,
    setHotels,
    country,
    setCountry,
    cityNames,
    error,
    setError,
    weather,
    setWeather,
    SearchCovid,
    handleChange,
    searchCity,

    handleCity,
    searchHotel,
    searchWeather,
  } = useContext(UserContext);

  return (
    <>
      <Select options={options} onChange={handleChange.bind(this)} />

      <button onClick={searchCity}>Search</button>
      <h1>Today's Case: {todayCase}</h1>

      <div>
        {cities.map((city, index) => (
          <span key={city.name}>
            <div onClick={() => handleCity(index)}>{city.name}</div>
          </span>
        ))}
      </div>
      <button onClick={searchHotel}>SearchHotel</button>
      <div>
        {hotels.map((hotel, index) => (
          <span key={hotel.name}>
            <div>{hotel.name}</div>
          </span>
        ))}
      </div>
      <div>
        temp in {city}: {weather}
      </div>
    </>
  );
};

export default MainPage;

import React, { useContext, useState, useMemo } from "react";
import { UserContext } from "../context/core";
export const DestinationsPage = () => {
  const { cities, handleCity, searchHotel } = useContext(UserContext);

  return (
    <div>
      {cities.map((city, index) => (
        <span key={city.name}>
          <div onClick={() => handleCity(index)}>{city.name}</div>
        </span>
      ))}
      <button onClick={searchHotel}>SearchHotel</button>
    </div>
  );
};

export default DestinationsPage;

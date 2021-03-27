import React, { useContext, useState, useMemo } from "react";
import { UserContext } from "../context/core";

export const CovidPage = () => {
  const { todayCase,
    todayActiveCase,
    todayRecovered,
    todayDeath,
    totalCase,
    totalActiveCase,
    totalRecovered,
    totalDeath,  } = useContext(UserContext);

  return (

    <div>
      <h1>Today's Case: {todayCase}</h1>
      <h1>Today's active Case: {todayActiveCase}</h1>
      <h1>Today's Death Case: {todayDeath}</h1>
      <h1>Today's Recovered Case: {todayRecovered}</h1>
      <h1>total  Case: {totalCase}</h1>
      <h1>total  active case: {totalActiveCase}</h1>
      <h1>total death Case: {totalDeath}</h1>
      <h1>total recovered  Case: {totalRecovered}</h1>
      
      

    </div>
  );
};

export default CovidPage;

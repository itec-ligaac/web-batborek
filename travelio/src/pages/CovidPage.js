import React, { useContext, useState, useMemo } from "react";
import { UserContext } from "../context/core";

export const CovidPage = () => {
  const { todayCase } = useContext(UserContext);

  return (
    <div>
      <h1>Today's Case: {todayCase}</h1>
    </div>
  );
};

export default CovidPage;

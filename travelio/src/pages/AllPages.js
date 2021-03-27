import React, { useContext } from "react";
import { UserContext } from "../context/core";

import MainPage from "./MainPage";
import DestinationsPage from "./DestinationsPage";
import { HotelsPage } from "./HotelsPage";
import CovidPage from "./CovidPage";

export const AllPages = () => {
  const { currentPage } = useContext(UserContext);
  return (
    <div>
      {currentPage === 0 && <MainPage />}
      {currentPage === 1 && <DestinationsPage />}
      {currentPage === 2 && <HotelsPage />}
    </div>
  );
};

export default AllPages;

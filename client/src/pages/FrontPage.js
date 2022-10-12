import React from "react";
import CategoryFilter from "../components/CategoryFilter";
import VacationCard from "../components/VacationSpots";

import { useQuery } from "@apollo/client";
import { QUERY_SPOTS } from "../utils/queries";

const FrontPage = ({ type, isAuth }) => {
  const { loading, data } = useQuery(QUERY_SPOTS);
  //todo add spinner from MUI
  if (loading) {
    return "";
  }

  if (!loading) {
    return (
      <div className="wrapper">
        <CategoryFilter />
        <main>
          <div id="spot-cards" className="fade-in-delay">
            {data?.spots?.length > 0 &&
              data.spots.map((spot, i) => (
                <VacationCard type={type} key={i} spot={spot} />
              ))}
          </div>
        </main>
      </div>
    );
  }
};

export default FrontPage;

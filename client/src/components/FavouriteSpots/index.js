import React from "react";
import VacationCard from "../VacationSpots";
import { useQuery } from "@apollo/client";
import {  GET_FAVORITE_SPOTS } from "../../utils/queries";

const FavouriteSpots = ({  type, isAuth }) => {
  const { loading, data } = useQuery(GET_FAVORITE_SPOTS);
  if (loading) {
    return <div>Spinner</div>;
  }

  if (!loading) {
    return (
      <div className="wrapper">
        <main>
          <div id="spot-cards" className="fade-in-delay">
              {data?.me?.spots?.length > 0 &&
              data?.me?.spots?.map((spot, i) => (
                <VacationCard type={type} key={i} spot={spot} />
              ))}
          </div>
        </main>
      </div>
    );
  }
};

export default FavouriteSpots;

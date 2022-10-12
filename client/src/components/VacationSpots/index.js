import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { ADD_DREAM_SPOT, REMOVE_SPOT_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const VacationCard = (props) => {
  const [addDreamSpot] = useMutation(ADD_DREAM_SPOT);
  const [removeSpotUser] = useMutation(REMOVE_SPOT_USER);
  console.log(props.spot);
  return (
    <div id="spot-cards" className="fade-in-delay">
      <div className="spot-card">
        <div className="img-wrapper"></div>
        <div className="img-wrapper">
          <img
            src={props.spot.image}
            alt={props.spot.city}
          />
          {window.location.pathname === "/spots" &&   <button onClick={() => {
            addDreamSpot({variables: {_id: props.spot._id}}).then(res => console.log(res))
          }} className="add-btn">
            <FontAwesomeIcon
              style={{ color: "white", height: "55px" }}
              icon={faPlus}
            />
          </button>}
          {window.location.pathname === "/favourites" &&   <button onClick={() => {
            removeSpotUser({variables: {_id: props.spot._id}}).then(res => console.log(res))
          }} className="remove-btn">
            <FontAwesomeIcon
              style={{ color: "white", height: "55px" }}
              icon={faMinus}
            />
          </button>}
        
        </div>
        <div className="card-text">
          <h2 className="location">{props.spot.city}</h2>
          <h3 className="description">{props.spot.description}</h3>
          <h4 className="treat">
            Treat: <span className="treat-answer">{props.spot.treat}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VacationCard;

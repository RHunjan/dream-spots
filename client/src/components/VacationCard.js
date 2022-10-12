import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ADD_DREAM_SPOT } from "../utils/queries";
import { useMutation } from "@apollo/client";

const VacationCard = (props) => {
  const [addDreamSpot, { data, loading }] = useMutation(ADD_DREAM_SPOT);
  console.log(props.spot);
  return (
    <div id="spot-cards" className="fade-in-delay">
      <div className="spot-card">
        <div className="img-wrapper"></div>
        <div className="img-wrapper">
          <img
            src={props.spot.image}
            alt=""
          />
          <button onClick={() => {
            addDreamSpot({variables: {_id: props.spot._id}}).then(res => console.log(res))
          }} className="add-btn">
            <FontAwesomeIcon
              style={{ color: "white", height: "55px" }}
              icon={faPlus}
            />
          </button>
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

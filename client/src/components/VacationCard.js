import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const VacationCard = (props) => {
  console.log(props.vacation);
  return (
    <div id="spot-cards" className="fade-in-delay">
      <div className="spot-card">
        <div className="img-wrapper">
          <img
            src={props.vacation.image}
            alt="tropical destination"
          />
          <button className="add-btn">
            <FontAwesomeIcon
              style={{ color: "white", height: "55px" }}
              icon={faPlus}
            />
          </button>
        </div>
        <div className="card-text">
          <h2 className="location">{props.vacation.city}</h2>
          <h3 className="description">
          {props.vacation.description}
          </h3>
          <h4 className="treat">
            Treat: <span className="treat-answer">{props.vacation.treat}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VacationCard;

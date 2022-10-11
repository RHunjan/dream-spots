import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const VacationCard = () => {
  return (
    <div id="spot-cards" className="fade-in-delay">
      <div className="spot-card">
        <div className="img-wrapper">
          <img
            src="https://previews.123rf.com/images/farang/farang1301/farang130100065/17604363-tropical-beach-in-the-morning-square-composition-.jpg"
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
          <h2 className="location">Bridgetown, Barbados</h2>
          <h3 className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            voluptatibus voluptas quo deleniti est itaque ipsum suscipit odit
            quos!
          </h3>
          <h4 className="treat">
            Treat: <span className="treat-answer">Lorem</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VacationCard;

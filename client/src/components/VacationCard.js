import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const VacationCard = () => {
  return (
    <div id="spot-cards" class="fade-in-delay">
      <div class="spot-card">
        <div class="img-wrapper">
          <img
            src="https://previews.123rf.com/images/farang/farang1301/farang130100065/17604363-tropical-beach-in-the-morning-square-composition-.jpg"
            alt="tropical destination"
          />
          <button class="add-btn">
            <FontAwesomeIcon
              style={{ color: "white", height: "55px" }}
              icon={faPlus}
            />
          </button>
        </div>
        <div class="card-text">
          <h2 class="location">Bridgetown, Barbados</h2>
          <h3 class="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            voluptatibus voluptas quo deleniti est itaque ipsum suscipit odit
            quos!
          </h3>
          <h4 class="treat">
            Treat: <span class="treat-answer">Lorem</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VacationCard;

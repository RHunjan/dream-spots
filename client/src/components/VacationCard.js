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
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80"
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
            Treat: <span className="treat-answer">{props.spot.treat}</span>d
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VacationCard;

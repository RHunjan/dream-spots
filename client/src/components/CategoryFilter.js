import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrellaBeach,
  faBuilding,
  faTree,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

const CategoryFilter = () => {
  return (

    <section>
      <div className="category-icons">
          <button className="icon" style={{ border: "none", background: "none" }}>
            
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "60px", cursor: "pointer" }}
              icon={faUmbrellaBeach} />
          </button>

          <button className="icon" style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "60px", cursor: "pointer" }}
              icon={faBuilding}
            />
          </button>
          <button className="icon" style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "60px", cursor: "pointer" }}
              icon={faTree}
            />
          </button>
          <button className="icon" style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "60px", cursor: "pointer" }}
              icon={faMountain}
            />
          </button>
      </div>
      <h1 className="category-heading fade-in">We know a spot...</h1>
    </section>
  );
};

export default CategoryFilter;

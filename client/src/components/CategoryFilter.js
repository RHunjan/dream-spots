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
      <div class="category-icons">
        <a href="#spot-cards">
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "30px" }}
              icon={faUmbrellaBeach}
            />
          </button>

          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "30px" }}
              icon={faBuilding}
            />
          </button>
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "30px" }}
              icon={faTree}
            />
          </button>
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              style={{ color: "#f6a192", height: "55px", marginRight: "30px" }}
              icon={faMountain}
            />
          </button>
        </a>
      </div>
      <h1 class="category-heading fade-in">We know a spot...</h1>
    </section>
  );
};

export default CategoryFilter;

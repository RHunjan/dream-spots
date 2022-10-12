import React from "react";
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
          <button style={{ border: "none", background: "none" }}>
            
            <FontAwesomeIcon
              icon={faUmbrellaBeach}
              className="icon" />
          </button>

          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              icon={faBuilding}
              className="icon"
            />
          </button>
          <button style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              icon={faTree}
              className="icon"
            />
          </button>
          <button  style={{ border: "none", background: "none" }}>
            <FontAwesomeIcon
              icon={faMountain}
              className="icon"
            />
          </button>
      </div>
      <h1 className="category-heading fade-in">We know a spot...</h1>
    </section>
  );
};

export default CategoryFilter;

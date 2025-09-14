import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchFilter = () => {
  const [activeState, setActiveState] = useState("All");
  return (
    <div className="filter-container">
      <form method="get">
        <div className="state-list">
          <span
            className={`filter-state ${activeState === "All" ? "active" : ""}`}
            onClick={() => setActiveState("All")}>
            All
          </span>
          <span
            className={`filter-state ${activeState === "New" ? "active" : ""}`}
            onClick={() => setActiveState("New")}>
            New
          </span>
          <span
            className={`filter-state ${activeState === "Used" ? "active" : ""}`}
            onClick={() => setActiveState("Used")}>
            Used
          </span>
        </div>
        <div className="search-container">
          <div className="filter-option">
            {" "}
            <label htmlFor="">Select Makes</label>{" "}
            <select name="" id="">
              <option value="">Audi</option>
            </select>
          </div>
          <div className="filter-option">
            {" "}
            <label htmlFor="">Select Models</label>{" "}
            <select name="" id="">
                <option value="">Q7</option>
            </select>
          </div>
          <div className="filter-option">
            {" "}
            <label htmlFor="">Year</label>{" "}
            <select name="" id="">
                <option value="">2023</option>
            </select>
          </div>
          <button className="search-btn" type="submit">
            <FontAwesomeIcon icon={faSearch} /> search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;

import React from "react";

const Search = ({ handleChange, handleClick }) => {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search for a country...."
        className="country"
        onChange={handleChange}
        name="country"
      />
      <div className="filter">
        <div
          onClick={() => {
            let continent = document.querySelector("ul");

            continent.style.display === "none"
              ? (continent.style.display = "block")
              : (continent.style.display = "none");
          }}
          className="filter_click"
        >
          <p>Filter By Region</p>
          <p></p>
        </div>
        <ul className="continent">
          {/* <li onClick={handleClick} value="Africa">
            All
          </li> */}
          <li onClick={handleClick} value="Africa">
            Africa
          </li>
          <li onClick={handleClick} value="America">
            America
          </li>
          <li onClick={handleClick} value="Asia">
            Asia
          </li>
          <li onClick={handleClick} value="Europe">
            Europe
          </li>
          <li onClick={handleClick} value="Oceania">
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;

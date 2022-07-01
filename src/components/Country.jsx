import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { useState } from "react";

const Country = ({ filterCountries, handleCountry, loading, hasError }) => {
  return (
    <>
      {loading ? (
        <div className="loading"> <p> Loading...</p>  </div>
      ) : hasError ? (
        <div> Error fetching the data </div>
      ) : (
        filterCountries.map((country, index) => {
          return (
            // <div >
              <div key={index} className="country" onClick={() => handleCountry(country)}>
                <img src={country.flags.png} alt="" />
                <div>
                  <h3>
                    {country.name.common}
                  </h3>
                  <br />
                  <p> <strong>Population:</strong> {country.population}</p>
                  <p>  <strong>Region:</strong> {country.region}</p>
                  <p>  <strong>Capital:</strong> {country.capital}</p>
                </div>
              </div>
          );
        })
      )}

      {/* <Outlet /> */}
    </>
  );
};
export default Country;

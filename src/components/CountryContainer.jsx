import React from "react";
import Country from "./Country";

const CountryContainer = ({
  theme,
  filterCountries,
  handleCountry,
  hasError,
  loading,
}) => {
  return (
    <div className='cardContainer'>
      <Country
        filterCountries={filterCountries}
        handleCountry={handleCountry}
        hasError={hasError}
        loading={loading}
      />
    </div>
  );
};

export default CountryContainer;

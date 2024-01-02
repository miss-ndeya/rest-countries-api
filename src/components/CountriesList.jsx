import React from "react";
import CountryCard from "../components/CountryCard";

const CountriesList = ({ countries }) => {
  return (
    <div className="row list-country d-flex align-items-start align-items-lg-center flex-wrap gy-5 gx-0 gx-lg-5 my-1 my-lg-0">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;

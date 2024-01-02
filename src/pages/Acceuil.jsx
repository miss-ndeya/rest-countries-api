import React, { useState, useEffect } from "react";
import Loader from "../components/loader";
import CountriesList from "../components/CountriesList";
import FilterForm from "../components/FilterForm";

const Acceuil = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("tout");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const pays = await response.json();
      setCountries(pays);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Impossible de contacter le serveur");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredCountries = countries.filter(
    (country) =>
      (filter === "tout" || country.region === filter) &&
      (country.name.common.toLowerCase().includes(inputValue.toLowerCase()) ||
        country.region.toLowerCase().includes(inputValue.toLowerCase()))
  );

  return (
    <div className="d-flex flex-column">
      <div className="container my-5 pt-5">
        <FilterForm
          onFilterChange={handleFilterChange}
          onInputValueChange={handleInputValueChange}
        />

        {loading ? (
          <Loader />
        ) : filteredCountries.length > 0 ? (
          <CountriesList countries={filteredCountries} />
        ) : (
          <span className="text-danger">Aucun pays correspondant trouvé.</span>
        )}
      </div>
    </div>
  );
};

export default Acceuil;

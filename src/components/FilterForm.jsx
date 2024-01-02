import React from "react";
import SearchForm from "./SearchForm";

const FilterForm = ({ onFilterChange, onInputValueChange }) => {
  return (
    <SearchForm
      onFilterChange={onFilterChange}
      onInputValueChange={onInputValueChange}
    />
  );
};

export default FilterForm;

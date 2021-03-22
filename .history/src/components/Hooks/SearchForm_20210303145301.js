import React from "react";

const SearchForm = () => {
  return (
    <div>
      <input type="text" value={``} placeholder={`search`} name="search" />
      <input type="text" value={``} placeholder={`location`} name="location" />
    </div>
  );
};

export default SearchForm;

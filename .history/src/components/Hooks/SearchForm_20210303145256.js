import React from "react";

const SearchForm = () => {
  return (
    <div>
      <input type="text" value={``} placeholder={`search`} name="search" />
      <input type="text" value={``} placeholder={`location`} name="loacation" />
    </div>
  );
};

export default SearchForm;

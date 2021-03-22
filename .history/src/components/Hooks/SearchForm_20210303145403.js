import React from "react";

const SearchForm = () => {
  return (
    <div>
      <input
        className="px-4"
        type="text"
        value={``}
        placeholder={`search`}
        name="search"
      />
      <input
        className="px-4"
        type="text"
        value={``}
        placeholder={`location`}
        name="location"
      />
    </div>
  );
};

export default SearchForm;

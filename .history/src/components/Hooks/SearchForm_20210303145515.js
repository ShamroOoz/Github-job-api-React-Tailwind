import React from "react";

const SearchForm = () => {
  return (
    <div className="py-3">
      <input
        className="px-4"
        type="text"
        placeholder={`search`}
        name="search"
      />
      <input
        className="px-4"
        type="text"
        placeholder={`location`}
        name="location"
      />
    </div>
  );
};

export default SearchForm;

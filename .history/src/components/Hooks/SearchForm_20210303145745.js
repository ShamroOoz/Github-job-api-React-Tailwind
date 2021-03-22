import React from "react";

const SearchForm = () => {
  return (
    <div className="py-3 flex justify-evenly">
      <input
        className="p-4 ring-2 ring-blue-200"
        type="text"
        placeholder={`search`}
        name="search"
      />
      <input
        className="p-4 ring-2 ring-blue-200"
        type="text"
        placeholder={`location`}
        name="location"
      />
    </div>
  );
};

export default SearchForm;

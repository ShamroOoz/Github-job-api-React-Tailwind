import React from "react";

const SearchForm = () => {
  return (
    <div className="py-3 flex justify-evenly">
      <input
        className="p-3 ring-2 ring-blue-200"
        type="text"
        placeholder={`search by job description `}
        name="description "
      />
      <input
        className="p-3 ring-2 ring-blue-200"
        type="text"
        placeholder={`search by location`}
        name="location "
      />
    </div>
  );
};

export default SearchForm;

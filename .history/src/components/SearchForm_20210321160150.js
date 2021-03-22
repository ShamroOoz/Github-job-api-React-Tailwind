import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form className="py-3 flex justify-evenly items-center">
      <input
        className=" ring-2 ring-blue-200"
        type="text"
        placeholder={`search by job description `}
        name="description"
        value={params.description || ""}
        onChange={handleparamchange}
      />
      <input
        className=" ring-2 ring-blue-200"
        type="text"
        placeholder={`search by location`}
        name="location"
        value={params.location || ""}
        onChange={handleparamchange}
      />
      <input
        type="checkbox"
        className="ring-2 ring-blue-200"
        value={params.full_time || ""}
        onChange={handleparamchange}
      />
      Full Time
    </form>
  );
};

export default SearchForm;
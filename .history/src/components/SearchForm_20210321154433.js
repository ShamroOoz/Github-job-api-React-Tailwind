import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form className="py-3 flex justify-evenly items-center">
      <input
        className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline "
        type="text"
        placeholder={`search by job description `}
        name="description"
        value={params.description || ""}
        onChange={handleparamchange}
      />
      <input
        className="p-3 ring-2 ring-blue-200"
        type="text"
        placeholder={`search by location`}
        name="location"
        value={params.location || ""}
        onChange={handleparamchange}
      />
      <input
        type="checkbox"
        className="p-7 ring-2 ring-blue-200"
        value={params.full_time || ""}
        onChange={handleparamchange}
      />
      Full Time
    </form>
  );
};

export default SearchForm;

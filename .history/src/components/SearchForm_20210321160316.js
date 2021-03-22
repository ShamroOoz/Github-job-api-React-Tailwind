import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form className="py-3 flex justify-evenly items-center">
      <input
        className="w-full px-3 py-2 outline-none border-0 focus:ring-2 ring-indigo-600 border-2 border-gray-300 rounded-lg placeholder-gray-500 placeholder-opacity-100;"
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

import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form className="py-3 flex justify-evenly items-center">
      <div className="relative flex w-full flex-wrap items-stretch mb-3">
        <input
          type="text"
          placeholder="Placeholder"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white  rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
        />
        <span className="z-10 h-full leading-snug font-normal  text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
          <i className="fas fa-user"></i>
        </span>
      </div>
      <input
        className="p-3 ring-2 ring-blue-200"
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

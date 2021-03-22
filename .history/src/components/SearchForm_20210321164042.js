import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-x-8">
        <div className="py-3 px-2 flex space-x-3 ">
          <input
            className="text-style"
            type="text"
            placeholder={`search by job description `}
            name="description"
            value={params.description || ""}
            onChange={handleparamchange}
          />
          <input
            className="text-style"
            type="text"
            placeholder={`search by location`}
            name="location"
            value={params.location || ""}
            onChange={handleparamchange}
          />
        </div>
        <div className="flex">
          <label className="flex items-center">
            <input
              type="checkbox"
              value={params.full_time || ""}
              onChange={handleparamchange}
            />
            <span className="ml-2">Full Time </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

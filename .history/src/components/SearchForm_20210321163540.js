import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form>
      <div className="grid grid-cols-2 justify-items-cente">
        <div className="py-3 flex justify-evenly items-center space-x-3 ">
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
        <div className="flex mt-6">
          <label className="flex items-center justify-items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value={params.full_time || ""}
              onChange={handleparamchange}
            />
            <span className="ml-2">Full Timee </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

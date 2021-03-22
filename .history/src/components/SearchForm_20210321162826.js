import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form>
      <div className="flex justify-center  space">
        <div className="py-3 flex justify-evenly items-center flex-shrink">
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
          <label className="flex items-center">
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
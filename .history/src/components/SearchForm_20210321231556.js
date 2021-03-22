import React from "react";

const SearchForm = ({ handleparamchange, params, toggle }) => {
  return (
    <form>
      <div className="grid grid-cols-2  ">
        <div className="py-3 px-10 flex space-x-3 ">
          <input
            className="text-style"
            type="text"
            placeholder={`Search by title `}
            name="description"
            value={params.description || ""}
            onChange={handleparamchange}
          />
          <input
            className="text-style"
            type="text"
            placeholder={`Search by location`}
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
            <span
              className={`ml-2  text-white ${
                toggle === 1 ? "text-white " : " "
              }`}
            >
              Full Time{" "}
            </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  console.log(params);
  return (
    <div className="py-3 flex justify-evenly">
      <input
        className="p-3 ring-2 ring-blue-200"
        type="text"
        placeholder={`search by job description `}
        name="description "
        value={params.description}
        onChange={() => handleparamchange}
      />
      <input
        className="p-3 ring-2 ring-blue-200"
        type="text"
        placeholder={`search by location`}
        name="location "
        value={params.location}
        onChange={() => handleparamchange}
      />
    </div>
  );
};

export default SearchForm;
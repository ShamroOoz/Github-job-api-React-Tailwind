import React from "react";

const SearchForm = ({ handleparamchange, params }) => {
  return (
    <form>
      <div className="py-3 flex justify-evenly items-center">
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
      <div class="flex mt-6">
  <label class="flex items-center">
    <input type="checkbox" class="form-checkbox"  value={params.full_time || ""}
        onChange={handleparamchange}>
    <span class="ml-2">Full Timee </span>
  </label>
</div>

      <input
        type="checkbox"
        className="ring-2 ring-blue-200"
        value={params.full_time || ""}
        onChange={handleparamchange}
        id="full-time"
      />
      <labe>Full Time</labe>
    </form>
  );
};

export default SearchForm;

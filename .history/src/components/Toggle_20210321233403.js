import React from "react";

const Toggle = ({ toggle, settoggle }) => {
  return (
    <div className="flex justify-center items-center ">
      <span className={`${toggle === 0 ? "text-black" : ""} mr-2`}>
        Dark Mode:
      </span>
      <div
        className={` ${
          toggle === 1 ? "bg-green-400" : "bg-gray-400"
        } relative rounded-full w-12 h-6 transition duration-200 ease-linear `}
      >
        <label
          htmlFor="toggle"
          className={` ${
            toggle === 1
              ? "translate-x-full border-green-400"
              : "translate-x-0 border-gray-400"
          } absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer`}
        ></label>
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          className="appearance-none w-full h-full border-none active:border-none focus:border-none"
          onClick={() => (toggle === 0 ? settoggle(1) : settoggle(0))}
        />
      </div>
    </div>
  );
};

export default Toggle;

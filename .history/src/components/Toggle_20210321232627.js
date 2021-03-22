import React from "react";

const Toggle = ({ toggle, settoggle }) => {
  return (
    <div className="flex justify-center items-center ">
      <span class="">
        <svg
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
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
        <span class="">
          <svg
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Toggle;

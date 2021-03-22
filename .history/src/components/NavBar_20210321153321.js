import React from "react";

const NavBar = () => {
  return (
    <nav className="relative flex flex-wrap items-center  px-2 py-3 navbar-expand-lg bg-blue-500 ">
      <div className="w-full relative flex  lg:w-auto px-5 lg:static lg:block lg:justify-center">
        <a
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
          href="#pablo"
        >
          blue Menu
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

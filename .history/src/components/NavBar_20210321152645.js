import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center  px-2 py-3 navbar-expand-lg bg-blue-500 rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                href="#pablo"
              >
                blue Menu
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

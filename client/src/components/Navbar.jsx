import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [NavActive, setNavActive] = useState(false);

  const handleClick = () => {
    setNavActive(!NavActive);
  };

  return (
    <div>
      <div>
        <nav className="bg-white dark:bg-gray-800 shadow py-4 ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <Link className="flex-shrink-0" to="/"></Link>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <Link
                      className=" text-red-700 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium text-2xl"
                      to="/"
                    >
                      CrudKaro
                    </Link>
                    <Link
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                      to="/about"
                    >
                      About
                    </Link>
                  </div>
                </div>
              </div>
             < div className="block">
                <div className="flex -mr-2 md:block :mt-16">
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button
                  className={
                    NavActive
                      ? "text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                      : "text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none "
                  }
                  onClick={handleClick}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`${NavActive ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#"
              >
                Home
              </Link>
              <Link
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/#"
              >
                Gallery
              </Link>
            </div>
            <div className="flex p-2"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

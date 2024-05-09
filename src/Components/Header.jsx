import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarData } from "../Configs/ApplicationData";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white flex  items-center justify-between shadow-md py-4 px-4 sm:px-10  font-[sans-serif] min-h-[70px] ">
      <h1 className=" font-sans text-xl font-semibold tracking-wider">
        SparkleNote
      </h1>

      <div className="hidden lg:flex justify-center flex-wrap space-x-12 lg:justify-center grow  ">
        {navbarData.map((value) => (
          <Link
            key={value.id}
            to={value.to}
            className="text-base text-gray-700 hover:text-blue-400 font-medium w-1/2 lg:w-auto"
          >
            {value.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center ml-auto  space-x-2 sm:space-x-6">
        <Link to="/login" className="font-semibold  text-[12px] sm:text-[15px] border-none outline-none">
          Login
        </Link>
        <Link to="/signup" className=" px-2 sm:px-4  py-1 sm:py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
          Sign up
        </Link>

        <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
          <svg
            className="w-7 h-7"
            fill="#333"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu for small screens */}
      {isMenuOpen && (
        <div
          className={` z-40 lg:hidden transition-all duration-300 absolute top-19 left-0  w-[60%] md:w-[40%] h-full bg-white  flex flex-col items-center justify-start gap-6 pt-16  `}
        >
          {navbarData.map((value) => (
            <React.Fragment key={value.id}>
              <Link
                to={value.to}
                className="text-base text-gray-700 hover:text-blue-400 font-medium"
              >
                {value.name}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  );
}

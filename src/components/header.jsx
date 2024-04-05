import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faClock,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* header starts here */}
      <div className="w-full  h-15 text-sm  sm:h-10 bg-orange-100 items-center flex flex-row rounded-xl sm:justify-between  sm:gap-x-5 mt-0 ">
        <span className="sm-2 md:text-lg border-double bg-orange-300 hover:bg-orange-400 rounded-md m-3">
          <FontAwesomeIcon icon={faClock} /> One-Time Offer
        </span>{" "}
        <div className="flex md:flex-row gap-x-3 md:w-auto items-center md:h-10 sm:text-lg md:text-sm ">
        Your AI Offer Discount offer is valid till{" "}
        <div className="bg-stone-100 text-red-300 rounded-md font-semibold">
          {time}
        </div>{" "}
        </div>
        <button className="sm-2 sm:text-lg sm-absolute sm:end-0 bg-red-300 hover:bg-red-400 text-black rounded-md px-2 py-1  m-3">
          Claim Discount
        </button>
      </div>
      <div className="w-full h-full ">
        <div className="flex flex-row justify-between pb-1  ">
          <div className="h-20 bg-white items-center  flex gap-x-3 font-extrabold">
            <FontAwesomeIcon icon={faB} className="text-2xl text-gray-800 " />
            <h1 className="hidden  sm:block sm:text-2xl md:text-lg sm:font-bold sm:text-center">
              Project Dashboard
            </h1>
          </div>

          <div className="flex  rounded bg-white mb-0 items-center gap-x-5 ">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search storyboards"
              className="hidden sm:block h-9 border-none bg-transparent px-4 py-1 text-gray-900  "
            ></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="sm:hidden md:hidden"/>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 font-bold leading-6 text-sm shadow rounded-md text-black   bg-sky-200 hover:bg-sky-300 transition ease-in-out duration-150 cursor-not-allowed"
              disabled=""
            >
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span >Quick Start</span>
            </button>
            <img
              src="https://github.com/raj2410p/dashboard-design/blob/main/src/assets/canva.jpg?raw=true"
              alt="User"
              className=" w-7 h-7 sm:w-12 sm:h-12 rounded-full "
            />
          </div>
        </div>
      </div>
      {/* header ends here */}
    </>
  );
}

export default Header;

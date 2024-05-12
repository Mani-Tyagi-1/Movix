import React from "react";

const NavBar = () => {
  return (
    <div className="text-white flex flex-col justify-between   bg-gray-900 w-[11rem] h-screen fixed left-0 top-0  border-r border-cyan-300  p-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl text-cyan-200 font-serif "> Movix</h1>
        
        <div className="mt-4 flex justify-center">
          <ul className="mt-4 ">
            <li className=" border-2  border-gray-400 py-1 mb-4 px-8 rounded-md hover:text-cyan-500 hover:shadow-cyan-300 shadow-md ">
              Home
            </li>
            <li className=" border-2 border-gray-400 py-1 px-8 rounded-md hover:text-cyan-500 hover:shadow-cyan-300 shadow-md">
              Search
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="mt-4 flex justify-center">
          <ul>
            <li className=" border-2 border-gray-400 py-1 mb-4 px-8 rounded-md hover:text-cyan-500 hover:shadow-cyan-300 shadow-md">
              Login
            </li>
            <li className=" border-2 border-gray-400 py-1 px-8 rounded-md hover:text-cyan-500 hover:shadow-cyan-300 shadow-md">
              Register
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

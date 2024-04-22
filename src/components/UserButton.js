import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserButton({className}) {
  return (
    <div className={`bg-gray-100 p-8 w-80 ${className}`}>
        <FaUserCircle className=" w-16 h-16 mx-auto"/>
      <h3 className="text-2xl font-bold text-[#333] text-center">Web Devloper</h3>

      <button
        type="button"
        className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded" >
        Check out
      </button>
    </div>
  );
}

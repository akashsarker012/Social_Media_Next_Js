import React from "react";

export default function Lable({title,className}) {
  return (
    <label className={`block mb-2 text-sm font-bold text-gray-700 dark:text-white ${className}`} >
      {title}
    </label>
  );
}

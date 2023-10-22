/* eslint-disable react/prop-types */
//import React from 'react'

import { GetThemeValues } from "./ContextTheme";

export const BottomNav = ({ filterType }) => {
  const { darkTheme } = GetThemeValues();
  return (
    <div
      className={`${
        darkTheme ? "  text-white " : " text-[#494C6B] "
      } border-[#494C6B] lg:text-[15px] border-b-[0.5px]  flex justify-center items-center gap-8  text-sm font-light h-16  rounded-tl-md rounded-tr-md `}
    >
      <button
        onClick={() => filterType("all")}
        type="button"
        className=" focus:font-bold  "
      >
        All
      </button>
      <button
        onClick={() => filterType("active")}
        type="button"
        className=" focus:font-bold   "
      >
        Active
      </button>
      <button
        onClick={() => filterType("complete")}
        type="button"
        className=" focus:font-bold   "
      >
        Completed
      </button>
    </div>
  );
};

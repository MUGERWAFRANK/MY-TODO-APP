import { useState } from "react";
import { GetThemeValues } from "./ContextTheme";

// eslint-disable-next-line react/prop-types
export const AddForm = ({ addHandler }) => {
  const [item, setItem] = useState("");

  const { darkTheme } = GetThemeValues();

  const handleSubmit = (e) => {
    e.preventDefault();
    addHandler(item);
    setItem("");
  };

  return (
    <div
      className={`${
        darkTheme ? "bg-[#25273D]" : "bg-white"
      } py-2 lg:py-3 px-5 rounded-md`}
    >
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            className={`${
              darkTheme
                ? "bg-[#25273D] focus:bg-[#2f314c] focus:text-white"
                : "bg-white"
            } text-gray-900 text-sm  lg:py-2 py-1 px-3  block w-full focus:outline-none    `}
            placeholder="Create new ToDo item"
            onChange={(e) => setItem(e.target.value)}
            value={item}
            required
          />
        </div>
        <button
          type="submit"
          className={`${
            darkTheme
              ? "bg-[#444767] hover:bg-[#55597f]"
              : "bg-[#3A7CFD] hover:bg-[#366fe1]"
          } inline-flex items-center py-2.5 px-3 lg:px-7 ml-2 text-xs font-medium text-white  rounded-lg   `}
        >
          Add
        </button>
      </form>
    </div>
  );
};

/* eslint-disable react/prop-types */
//import React from 'react'
import { MdDeleteForever, MdCheck, MdCancel } from "react-icons/md";
import { GetThemeValues } from "./ContextTheme";

export const Item = ({ itemData, deleteItem, statusUpdate }) => {
  const { darkTheme } = GetThemeValues();
  return (
    <div>
      <div className="flex justify-between  h-14  items-center px-5 text-xs text-[#494C6B]">
        <div className="flex items-center">
          {itemData.complete ? (
            <MdCheck
              onClick={() => statusUpdate(itemData.id)}
              className={`${
                darkTheme ? "text-[#494C6B]" : "text-[#3A7CFD]"
              } h-4 w-4  mr-3`}
            />
          ) : (
            <MdCancel
              onClick={() => statusUpdate(itemData.id)}
              className={`${
                darkTheme ? "text-[#494C6B]" : "text-[#3A7CFD]"
              } h-4  w-4 mr-3`}
            />
          )}
          <p
            className={`${itemData.complete && "line-through"} ${
              darkTheme && "text-white"
            } lg:text-[14px] `}
          >
            {itemData.text}
          </p>
        </div>

        <MdDeleteForever
          onClick={() => deleteItem(itemData.id)}
          className={`${
            darkTheme ? "text-[#494C6B]" : "text-red-300"
          } h-5 w-5 `}
        />
      </div>
      <div
        className={`${darkTheme ? "bg-[#393A4B]" : "bg-[#E3E4F1]"} h-[1px] `}
      ></div>
    </div>
  );
};

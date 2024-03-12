"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";

export default function ButtonSelectChart({ label, handleRemoveLabel }) {
  return (
    <div className="flex gap-2 px-4 lg:mt-4 mt-2 overflow-x-scroll scrollbar-hidden">
      {label.map((item) => (
        <button
          key={item}
          onClick={() => {
            handleRemoveLabel(item);
          }}
          className={` px-2 gap-2 whitespace-pre  py-1 flex items-center justify-between
                     hover:bg-gray-200 border text-xs transition-all rounded-xl`}
        >
          {item}
          <IoMdClose />
        </button>
      ))}
    </div>
  );
}

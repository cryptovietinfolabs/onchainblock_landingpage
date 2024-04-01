import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function ButtonDrop({ labelSelect, handleAddLabel }) {
  return (
    <div className="max-w-max">
      <ul
        className={`rounded-sm relative text-main2 btn-eth text-xs w-full h-full px-4 py-1`}
      >
        <li
          className={`relative group border rounded-md label_eth px-1 text-xs text-text`}
        >
          <p className="flex items-center gap-2 py-1 font-semibold justify-between px-3">
            Choose label
            <MdArrowForwardIos className="group-hover:rotate-90 transition-all flex-shrink-0" />
          </p>
          <ul
            className={`btn-eth__sub top-7 max-h-56 h-fit overflow-x-auto scrollbar-hidden shadow-md hidden border px-1 py-2 left-0 bg-black rounded-md absolute z-10 flex-col w-full text-left`}
          >
            {labelSelect.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleAddLabel(item);
                }}
                className={`px-3 py-1 my-0.5 
                 hover:bg-gray-700 border transition-all rounded-md`}
              >
                {item}
              </button>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

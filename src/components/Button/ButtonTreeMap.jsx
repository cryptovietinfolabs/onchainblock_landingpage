"use client";

import React, { useState } from "react";

import CaptureChart from "@/components/Button/CaptureChart";

function useButtonTreemap(initialTime) {
  const [time, setTime] = useState(initialTime);
  const ButtonTreeMap = ({ handleCapture }) => (
    <div>
      <div className="flex items-center rounded-md w-max text-xs font-semibold text-text mx-4 border border-gray-300">
        <button
          onClick={() => setTime(1)}
          className={`${
            time === 1 ? "bg-gray-200" : "hover:bg-gray-200"
          }  rounded-sm hover:bg-gray-200  w-full h-full px-2 py-1`}
        >
          24H
        </button>
        <button
          onClick={() => setTime(7)}
          className={`${
            time === 7 ? "bg-gray-200" : "hover:bg-gray-200"
          }  rounded-sm hover:bg-gray-200  w-full h-full px-2 py-1`}
        >
          1W
        </button>
        <button
          onClick={() => setTime(30)}
          className={`${
            time === 30 ? "bg-gray-200" : "hover:bg-gray-200"
          }  rounded-sm   w-full h-full px-2 py-1`}
        >
          1M
        </button>
        <button
          onClick={() => setTime(90)}
          className={`${
            time === 90 ? "bg-gray-200" : "hover:bg-gray-200"
          }  transition-all rounded-sm   w-full h-full px-2 py-1`}
        >
          3M
        </button>

        <button
          onClick={() => setTime(180)}
          className={`${
            time === 180 ? "bg-gray-200" : "hover:bg-gray-200"
          }  transition-all rounded-sm   w-full h-full px-2 py-1`}
        >
          6M
        </button>

        <button
          onClick={() => setTime(360)}
          disabled
          className="text-gray-400 transition-all rounded-sm  w-full h-full px-2 py-1"
        >
          1Y
        </button>
        <CaptureChart handleCapture={handleCapture} />
      </div>
    </div>
  );

  return [time, setTime, ButtonTreeMap];
}

export default useButtonTreemap;

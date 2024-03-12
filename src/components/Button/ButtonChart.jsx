"use client";

import React, { useState } from "react";

import CaptureChart from "./CaptureChart";

function ButtonChart({ handleClickExportChart, handleCapture }) {
  const [activeButton, _] = useState(null);

  return (
    <div className="flex items-center  rounded-md w-max text-xs font-semibold text-text mx-4 border border-gray-300">
      <button
        className={`rounded-sm hover:bg-gray-200 w-full h-full px-2 py-1 ${
          activeButton === "1W" ? "bg-gray-200" : ""
        }`}
        onClick={() =>
          !handleClickExportChart ? "none" : handleClickExportChart("7D")
        }
      >
        7D
      </button>
      <button
        className={`rounded-sm hover:bg-gray-200 w-full h-full px-2 py-1 ${
          activeButton === "1M" ? "bg-gray-200" : ""
        }`}
        onClick={() =>
          !handleClickExportChart ? "none" : handleClickExportChart("1M")
        }
      >
        1M
      </button>
      <button
        className={`rounded-sm hover:bg-gray-200 w-full h-full px-2 py-1 ${
          activeButton === "3M" ? "bg-gray-200" : ""
        }`}
        onClick={() =>
          !handleClickExportChart ? "none" : handleClickExportChart("3M")
        }
      >
        3M
      </button>
      <button
        className={`rounded-sm hover:bg-gray-200 w-full h-full px-2 py-1 ${
          activeButton === "6M" ? "bg-gray-200" : ""
        }`}
        onClick={() =>
          !handleClickExportChart ? "none" : handleClickExportChart("6M")
        }
      >
        6M
      </button>
      <button
        className={`rounded-sm hover:bg-gray-200 w-full h-full px-2 py-1 ${
          activeButton === "1Y" ? "bg-gray-200" : ""
        }`}
        onClick={() =>
          !handleClickExportChart ? "none" : handleClickExportChart("1Y")
        }
      >
        1Y
      </button>
      <button
        className={`rounded-sm hover:bg-gray-200 w-full h-full px-2 py-1 ${
          activeButton === "All" ? "bg-gray-200" : ""
        }`}
        onClick={() =>
          !handleClickExportChart ? "none" : handleClickExportChart("All")
        }
      >
        ALL
      </button>
      <CaptureChart handleCapture={handleCapture} />
    </div>
  );
}

export default ButtonChart;

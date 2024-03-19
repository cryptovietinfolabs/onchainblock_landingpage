"use client";

import { useState } from "react";

import { Ethereum, Sort } from "@/components/Logo";
import useFetch from "@/hooks/data/useFetch";

import EthBridgeItemTable from "../EthBridgeItemTable";

function EthBridgeTable({ isDarkMode = false }) {
  const { isLoading, data } = useFetch("valuelocked/table", "table-bridge");

  const [selectSort, setSelectSort] = useState(true);
  const [selectLabel, setSelectLabel] = useState(0);

  const listLabel = [
    {
      name: "24h Change",
    },
    {
      name: "7Day Change",
    },
    {
      name: "1M Change",
    },
  ];

  return (
    <div
      className={`${
        !isDarkMode && "bg-white"
      } mt-4 rounded-lg shadow-md  overflow-hidden`}
    >
      <div className="px-4 pb-4 shadow-md">
        <div className=" p-4 border rounded-lg overflow-x-scroll">
          <h3 className="font-semibold pb-4">
            {`Ethereum's Value Locked Statistics on Layer 2s`}
          </h3>
          <table className="w-full text-left">
            <thead className="">
              <tr className="flex lg:text-base md:text-base text-gray-500 text-sm border-b pb-2">
                <th className="flex justify-start lg:w-[440px] md:w-[340px] w-[50px]">
                  #
                </th>
                <th className="flex justify-start lg:w-full md:w-full w-[200px]">
                  Bridge
                </th>
                <th className="flex justify-end lg:w-full md:w-full w-[140px]">
                  Balance <Ethereum />
                </th>

                {listLabel.map((item, idx) => (
                  <th
                    key={item}
                    className="flex justify-end lg:w-full whitespace-pre items-center md:w-full w-[140px]"
                  >
                    {item.name} <Ethereum />
                    <button
                      onClick={() => {
                        setSelectSort(!selectSort);
                        setSelectLabel(idx);
                      }}
                      className="text-red-400  flex-shrink-0"
                    >
                      <Sort
                        colorDown={
                          !selectSort && selectLabel === idx ? "white" : "#3333"
                        }
                        colorUp={
                          selectSort && selectLabel === idx ? "white" : "#3333"
                        }
                      />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="flex flex-col">
              <EthBridgeItemTable
                data={data}
                selectLabel={selectLabel}
                selectSort={selectSort}
                isLoading={isLoading}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EthBridgeTable;

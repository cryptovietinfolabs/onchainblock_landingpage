"use client";

import { useEffect, useState } from "react";

import ButtonChart from "@/components/Button/ButtonChart";
import ButtonCheck from "@/components/Button/ButtonCheck";
import ButtonDrop from "@/components/Button/ButtonDrop";
import ButtonSelectChart from "@/components/Button/ButtonSelect";
import useLineChart2 from "@/components/Charts/LineChart/useLineChartMulti";
import LoadingChart from "@/components/Loading/LoadingChart";
import CentralizeApi from "@/data/CentralizeApi";
import CaptureDiv from "@/hooks/CaptureDiv";
import useShowLabel from "@/hooks/chart/useShowLabel";
import useLoadManageStore from "@/stores/useLoadManageStore";

function LineCex() {
  const [isChecked, setIsChecked] = useState(false);

  const labelApi = ["Binance", "OKX", "Kucoin", "Crypto.com", "MEXC"];
  const label2 = [
    "Binance",
    "OKX",
    "Kucoin",
    "Crypto.com",
    "MEXC",
    "Coinbase",
    "Gate",
    "Bitmex",
    "Bitfinex",
    "Houbi",
    "Bittrex",
    "FTX",
    "Binance US",
    "Coinlist",
    "Kraken",
    "Bybit",
    "Bitget",
    "Gemini",
  ];

  const {
    label,
    labelSelect,
    handleAddLabel,
    handleRemoveLabel,
    handleToggleLabels,
  } = useShowLabel(labelApi, label2);

  const { data, isLoading, isError } = CentralizeApi(label);
  const { percent, setPercentage } = useLoadManageStore();

  useEffect(() => {
    setPercentage(isLoading ? 0 : 100);
    // if (!isLoading && percent <= 100) {
    //   const interval = setInterval(() => {
    //     setPercentage(percent + 1);
    //   }, 10);
    //   return () => {
    //     clearInterval(interval);
    //   };
    // }
  }, [
    isLoading,
    // , percent
  ]);

  const { chartContainerRef, MakeExportChart } = useLineChart2(
    data,
    "spline",
    label,
  );

  const handleClickExportChart = (range) => {
    MakeExportChart(range);
  };
  const { divRef, handleCapture } = CaptureDiv();
  return (
    <div className="p-4 h-full flex flex-col justify-between shadow-md">
      <div className="lg:flex md:flex justify-between items-center ">
        <div className="p-4">
          <h3 className="text-[14px] md:text-[16px] font-semibold">
            Stablecoin Reserve On Chain
          </h3>
        </div>

        {/* <button id="toggleButton">Toggle Series</button> */}
        <ButtonChart
          handleClickExportChart={handleClickExportChart}
          handleCapture={handleCapture}
        />
      </div>
      <div className="flex items-center lg:mt-0 mt-4">
        <ButtonCheck
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleToggleLabels={handleToggleLabels}
        />
        <ButtonDrop handleAddLabel={handleAddLabel} labelSelect={labelSelect} />
      </div>
      <ButtonSelectChart handleRemoveLabel={handleRemoveLabel} label={label} />

      {isLoading ? (
        <div className="h-[14rem]">
          <div className="loading text-center mt-32">
            <span className="loading__dot"></span>
            <span className="loading__dot"></span>
            <span className="loading__dot"></span>
          </div>
        </div>
      ) : data?.length === 0 ? (
        <LoadingChart />
      ) : (
        <div ref={divRef}>
          <div id="line-chart" ref={chartContainerRef}></div>
        </div>
      )}
    </div>
  );
}

export default LineCex;

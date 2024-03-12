import React from "react";

export default function SelectDay(chart) {
  const MakeExportChart = (range) => {
    if (chart.current) {
      let min = null;
      let currentDate = new Date();

      currentDate.setDate(currentDate.getDate() + 1);

      let max = currentDate.getTime();

      switch (range) {
        case "7D":
          min = Date.now() - 7 * 24 * 3600 * 1000;
          max = Date.now();
          break;
        case "1M":
          min = Date.now() - 30 * 24 * 3600 * 1000;
          max = Date.now();
          break;
        case "3M":
          min = Date.now() - 3 * 30 * 24 * 3600 * 1000;
          max = Date.now();
          break;
        case "6M":
          min = Date.now() - 6 * 30 * 24 * 3600 * 1000;
          max = Date.now();
          break;
        case "1Y":
          min = Date.now() - 365 * 24 * 3600 * 1000;
          max = Date.now();
          break;
        case "All":
          chart.current.xAxis[0].setExtremes(null, null);
          break;
        default:
          min = Date.now() - 30 * 24 * 3600 * 1000;
          max = Date.now();
          break;
      }

      if (min !== null && max !== null) {
        chart.current.xAxis[0].setExtremes(min, max);
      }
    }
  };

  return MakeExportChart;
}

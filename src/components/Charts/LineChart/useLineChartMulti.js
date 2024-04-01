"use client";

import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsStock from "highcharts/modules/stock";
import { useEffect, useRef } from "react";

import ConvertSVG from "@/components/Logo/ConvertSVG";
import SelectDay from "@/components/SelectDay/SelectDay";
import LabelSvg from "@/hooks/LabelSvg";
import chartAreaDetail from "@/styles/chartArea/tooltip";
import ListColor from "@/utils/ListColor";
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  HighchartsStock(Highcharts);
}

const colors = ListColor();
const svgMap = LabelSvg();

const listSvg = ConvertSVG();

const useLineChart2 = (data, type, labelApi, chain) => {
  const option = chartAreaDetail(chain);

  const chartContainerRef = useRef(null);
  let chart = useRef(null);

  const convertData =
    data &&
    data?.map((item) => {
      return item?.map((innerItem) => {
        const dateTime = new Date(innerItem.timestamp);
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();
        const timestampParts = innerItem.timestamp.split("T")[0].split("-");
        if (timestampParts.length === 3) {
          let [year, month, day] = timestampParts;
          month = parseInt(month, 10);
          day = parseInt(day, 10);

          const utcDate = Date.UTC(year, month - 1, day, hour, minute);
          return [utcDate, innerItem.value];
        }
      });
    });

  useEffect(() => {
    if (chartContainerRef.current) {
      chart.current = Highcharts.stockChart(chartContainerRef.current, {
        ...option,
        events: {
          load() {
            this.showHideFlag = true;
          },
        },

        legend: {
          enabled: true,
          useHTML: true,
          itemStyle: {
            fontSize: "14px",
            textOverflow: "ellipsis",
          },
          labelFormatter: function () {
            const name = this.name;
            const svgLabel = listSvg?.map((svg) => {
              const matchingSvg = svgMap[this.name];
              const svgContent = matchingSvg ? svg[matchingSvg] : "";
              return `<div style="text-decoration:none; color:${
                this.visible ? this.color : "gray"
              }; display:flex; gap:4px; align-items:center;">${svgContent}${name}</div>`;
            });

            return svgLabel.join("");
          },
        },

        series: labelApi.map((data, idx) => ({
          name: data,
          type: "spline",
          data: convertData && convertData[idx],
          showInLegend: true,
          color: colors[0][data],
        })),
      });
    }
    return () => {
      if (chart.current) {
        chart.current.destroy();
        chart.current = null;
      }
    };
  }, [chain, convertData, data, labelApi, option, type]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateChart = () => {
    if (chart.current) {
      chart.current.update({
        series: data,
      });
    }
  };

  useEffect(() => {
    if (chart.current) {
      updateChart();
    }
  }, [data, updateChart]);

  const MakeExportChart = SelectDay(chart);

  return { chartContainerRef, MakeExportChart };
};

export const useLineChart3 = (data, type, labelApi, chain) => {
  const option = chartAreaDetail(chain);

  const chartContainerRef = useRef(null);
  let chart = useRef(null);

  const convertData =
    data &&
    data?.map((item) => {
      return item?.map((innerItem) => {
        const dateTime = new Date(innerItem.time);
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();
        const timestampParts = innerItem.time.split("T")[0].split("-");
        if (timestampParts.length === 3) {
          let [year, month, day] = timestampParts;
          month = parseInt(month, 10);
          day = parseInt(day, 10);

          const utcDate = Date.UTC(year, month - 1, day, hour, minute);
          return [utcDate, innerItem.value];
        }
      });
    });

  useEffect(() => {
    if (chartContainerRef.current) {
      chart.current = Highcharts.stockChart(chartContainerRef.current, {
        ...option,
        events: {
          load() {
            this.showHideFlag = true;
          },
        },

        legend: {
          enabled: true,
          useHTML: true,
          itemHoverStyle: {
            textDecoration: "none",
          },
          labelFormatter: function () {
            const name = this.name;
            const svgLabel = listSvg?.map((svg) => {
              const matchingSvg = svgMap[this.name];
              const svgContent = matchingSvg ? svg[matchingSvg] : "";
              return `<div style="text-decoration:none; color:${
                this.visible ? this.color : "gray"
              }; display:flex; gap:4px; align-items:center;">${svgContent}${name}</div>`;
            });

            return svgLabel.join("");
          },
        },

        series: labelApi.map((data, idx) => ({
          name: data,
          type: "spline",
          data: convertData && convertData[idx],
          showInLegend: true,
          color: colors[0][data],
        })),
      });
    }
    return () => {
      if (chart.current) {
        chart.current.destroy();
        chart.current = null;
      }
    };
  }, [chain, convertData, data, labelApi, option, type]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateChart = () => {
    if (chart.current) {
      chart.current.update({
        series: data,
      });
    }
  };

  useEffect(() => {
    if (chart.current) {
      updateChart();
    }
  }, [data, updateChart]);

  const MakeExportChart = SelectDay(chart);

  return { chartContainerRef, MakeExportChart };
};

export default useLineChart2;

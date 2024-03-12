import LabelSvg from "@/hooks/LabelSvg";
import chartAreaDetail from "@/style/chartArea/tooltip";
import ListColor from "@/utils/ListColor";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsStock from "highcharts/modules/stock";
import { useEffect, useRef } from "react";
import ConvertSVG from "../../Logo/ConvertSVG";
import SelectDay from "../../SelectDay/SelectDay";
if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  HighchartsStock(Highcharts);
}

const colors = ListColor();
const svgMap = LabelSvg();
const listSvg = ConvertSVG();
const useLineChart3 = (data, type, name, legend) => {
  const option = chartAreaDetail();

  const chartContainerRef = useRef(null);
  let chart = useRef(null);
  const convertData =
    data &&
    data.map((item) => {
      const dateTime = new Date(item.timestamp);
      const hour = dateTime.getHours();
      const minute = dateTime.getMinutes();
      const timestampParts = item?.timestamp?.split("T")[0].split("-");
      if (timestampParts?.length === 3) {
        let [year, month, day] = timestampParts;

        const utcDate = Date.UTC(
          year,
          month - 1,
          day.slice(0, 2),
          hour,
          minute
        );

        return [utcDate, item.value];
      }
    });
  useEffect(() => {
    if (chartContainerRef.current) {
      chart.current = Highcharts.stockChart(chartContainerRef.current, {
        ...option,

        legend: {
          enabled: legend ? false : true,
          useHTML: true,
          itemHoverStyle: {
            textDecoration: "none",
          },
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

        series: [
          {
            name: name,
            type: "areaspline",
            data: convertData,
            cursor: "pointer",
            color: colors[0][name],
          },
        ],
      });
    }
    return () => {
      if (chart.current) {
        chart.current.destroy();
        chart.current = null;
      }
    };
  }, [convertData, data, legend, name, option, type]);

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

export default useLineChart3;

import { differenceInYears } from "date-fns";
import Highcharts from "highcharts/highstock";

import formatValue from "@/utils/FormatNumber";
export default function chartAreaDetail(chain) {
  const options = {
    chart: {
      backgroundColor: "#181818',",
      panning: true,
      zoomType: "x",
      events: {
        load: function () {
          const renderer = this.renderer;
          const chartWidth = this.chartWidth;
          const imageWidth = 211;
          const imageHeight = 32;
          const imageX = chartWidth / 2 - imageWidth / 2;
          const imageY = 100;
          const image = renderer
            .image("/logo.svg", imageX, imageY, imageWidth, imageHeight)
            .add();
          image.css({ opacity: 0.08 });
        },
      },
    },
    exporting: false,
    rangeSelector: false,

    navigator: {
      maskFill: "rgba(91, 162, 231, 0.2)",
      outlineColor: "none",
      handles: {
        backgroundColor: "white",
        borderColor: "rgba(91, 162, 231, 0.6)",
        width: 10,
        symbols: ["doublearrow", "doublearrow"],
      },
      margin: 2,
      height: 35,
    },
    scrollbar: {
      enabled: false,
    },

    title: false,
    credits: false,

    xAxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "0.75rem",
          fontWeight: "normal",
        },
        step: 3,
        formatter: function () {
          const { min, max } = this.tick.axis;

          if (min && max) {
            const year = differenceInYears(max, min);

            return year
              ? Highcharts.dateFormat("%Y", this.value)
              : Highcharts.dateFormat("%d-%m", this.value);
          }

          return "";
        },
      },
      lineWidth: 0,
      tickWidth: 0,
      minRange: 86400 * 7 * 1000, // 24h * 7day * 1000ms
      crosshair: {
        width: 1,
        dashStyle: "Dash",
      },
    },

    yAxis: {
      title: "false",
      lineWidth: 0,
      tickAmount: 6,
      gridLineDashStyle: "LongDash",
      opposite: false,
      labels: {
        formatter: function () {
          var value = this.value;
          return formatValue(value);
        },
      },
    },

    tooltip: {
      shared: true,
      useHTML: true,
      shadow: false,
      valueDecimals: 2,
      split: false,
      className: "chart-wrapped",
      style: {
        display: "none",
      },
      formatter() {
        if (this.points) {
          const getPoint = this.points;
          getPoint.sort((a, b) => b.point.y - a.point.y);

          const data = getPoint[0].series.chart.options.series;
          const timestamp = Highcharts.dateFormat("%e-%m-20%y %H:%M", this.x);
          const getElement = (index) =>
            data[index] && getPoint[index]
              ? `<div class="chart-flex">
                <div class="chart-dot" style="background-color:${
                  getPoint[index].color
                }"></div>
                <h2 class="chart-name">${getPoint[index].series.name}:</h2>
                <p class="chart-name" style="display:flex; color:${
                  getPoint[index].color
                }; "'>
                ${
                  getPoint[index].point.y > 0
                    ? formatValue(getPoint[index].point.y)
                    : `-${formatValue(getPoint[index].point.y)}`
                }
                    </p>
                </div>`
              : "";

          return `
            <h3 class="chart-timestamp">${timestamp} </h3>
            ${getElement(0)}
            ${getElement(1)}
            ${getElement(2)}
            ${getElement(3)}
            ${getElement(4)}
            ${getElement(5)}
            ${getElement(6)}
            ${getElement(7)}
            ${getElement(8)}
            ${getElement(9)}
            ${getElement(10)}
            ${getElement(11)}
            ${getElement(12)}
            ${getElement(13)}
            ${getElement(14)}
            ${getElement(15)}
            ${getElement(16)}
            ${getElement(17)}
            ${getElement(18)}
          `;
        }
      },
    },

    plotOptions: {
      column: {
        stacking: "normal",
        borderWidth: 0,
        borderRadius: 0,
      },

      areaspline: {
        lineWidth: 1.5,
        fillOpacity: 0.05,
        states: {
          hover: {
            lineWidth: 2,
          },
        },
        marker: {
          enabled: false,
          symbol: "circle",
          states: {
            hover: {
              lineWidth: 0,
            },
          },
          radius: 2,
        },
      },
      spline: {
        lineWidth: 2,
        marker: {
          enabled: false,
        },

        series: {
          threshold: null,
          cropThreshold: 1000,
          pointInterval: 2 * 3600 * 1000,
        },

        fillOpacity: 0.2,

        linecap: "round",
        lineJoin: "round",
        dashStyle: "Solid",
        step: false,
        states: {
          hover: {
            lineWidth: 2,
          },
        },
      },

      series: {
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 1,
          states: {
            hover: {
              enabled: true,
              radius: 6,
            },
          },
        },
      },
    },
  };

  return options;
}

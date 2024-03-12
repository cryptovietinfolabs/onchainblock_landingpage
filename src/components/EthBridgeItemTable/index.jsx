import { color } from "highcharts";
import Link from "next/link";

import ConvertSVG from "@/components/Logo/ConvertSVG";
import formatValue from "@/utils/FormatNumber";
import ListColor from "@/utils/ListColor";

const skeleton = (
  <div className="w-[100%] h-8 bg-slate-200 animate-pulse mr-2 rounded-xl" />
);
const EthBridgeItemTable = ({ data, isLoading, selectSort, selectLabel }) => {
  const listSvg = ConvertSVG();
  const colors = ListColor();

  const sortedData = data;

  const sortCriteria = {
    0: "pr_1d",
    1: "pr_7d",
    2: "pr_30d",
  };

  sortedData?.sort((a, b) => {
    const sortField = sortCriteria[selectLabel];

    const valueA = selectSort ? b[sortField] : a[sortField];
    const valueB = selectSort ? a[sortField] : b[sortField];

    return valueA - valueB;
  });
  return isLoading
    ? Array.from({ length: 7 }, (item, index) => (
        <tr key={item} className="lg:text-base md:text-base text-sm flex ">
          <td className="py-2 flex items-center justify-start lg:w-[50px] md:w-[340px] w-[50px]">
            {skeleton}
          </td>
          <td className="py-2 flex items-center justify-start lg:w-full md:w-full w-[200px]">
            {skeleton}
          </td>
          <td className="py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]">
            {skeleton}
          </td>
          <td className="py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]">
            {skeleton}
          </td>
          <td className="py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]">
            {skeleton}
          </td>
          <td className="py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]">
            {skeleton}
          </td>
          <td className="py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]">
            {skeleton}
          </td>
        </tr>
      ))
    : sortedData?.map((item, idx) => (
        <tr
          key={item}
          className=" border-b text-sm flex text-dark2  hover:bg-slate-800 text-text font-medium rounded-lg lg:px-2"
        >
          <td className="py-2 flex items-center justify-start lg:w-[50px] md:w-[340px] w-[50px]">
            {idx + 1}
          </td>
          <td className="py-2 relative flex items-center justify-start lg:w-full md:w-full w-[200px]">
            <span
              style={{ color: colors[0][item.bridge] }}
              className={`line-clamp-1 flex items-center gap-2  border px-2 py-1 rounded-lg`}
            >
              {listSvg?.map((svg, index) => {
                if (svg[item.bridge]) {
                  const svgString = svg[item.bridge];
                  const svgContent = svgString.substring(
                    4,
                    svgString.length - 3,
                  ); // Remove &lt; and &gt;
                  return (
                    <div
                      key={item.bridge}
                      dangerouslySetInnerHTML={{
                        __html: `<svg ${svgContent}</svg>`,
                      }}
                    ></div>
                  );
                }
                return null;
              })}
              {item.bridge}
            </span>
          </td>
          <td
            className={` py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]`}
          >
            <span className="flex gap-2 items-center">
              {formatValue(item.balance)}
            </span>
          </td>

          <td
            className={`${
              item.pr_1d > 0 ? "text-green-500" : "text-red-400"
            } py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]`}
          >
            <span className="text-text">{formatValue(item.cvl_1d)}</span>
            <span className="border px-2 py-1 ml-2 rounded-lg flex gap-2 items-center">
              {item.pr_1d.toFixed(3)}%
            </span>
          </td>

          <td
            className={`${
              item.pr_7d > 0 ? "text-green-500" : "text-red-400"
            } py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]`}
          >
            <span className="text-text">{formatValue(item.cvl_7d)}</span>
            <span className="border px-2 py-1 ml-2 rounded-lg flex gap-2 items-center">
              {item.pr_7d.toFixed(3)}%
            </span>
          </td>

          <td
            className={`${
              item.pr_30d > 0 ? "text-green-500" : "text-red-400"
            } py-2 flex items-center justify-end lg:w-full md:w-full w-[140px]`}
          >
            <span className="text-text">
              {item.cvl_30d !== "comming soon"
                ? formatValue(item.cvl_30d)
                : "..."}
            </span>
            <span className="border px-2  py-1 ml-2 rounded-lg flex gap-2 items-center">
              {item.pr_30d !== "comming soon" ? item.pr_30d.toFixed(3) : "..."}{" "}
              %
            </span>
          </td>
        </tr>
      ));
};

export default EthBridgeItemTable;

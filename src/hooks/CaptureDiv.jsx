import { toJpeg, toPng, toSvg } from "html-to-image";
import { useRef } from "react";

const CaptureDiv = () => {
  const divRef = useRef(null);

  const handleCapture = async (name) => {
    try {
      let dataUrl;
      name === "png"
        ? (dataUrl = await toPng(divRef.current))
        : name === "jpeg"
          ? (dataUrl = await toJpeg(divRef.current))
          : name === "svg"
            ? (dataUrl = await toSvg(divRef.current))
            : "";
      const link = document.createElement("a");
      if (dataUrl) {
        link.href = dataUrl;
        link.download = `captureChart.${name}`;
        link.click();
      }
    } catch (error) {
      console.error("Failed download:", error);
    }
  };

  return { divRef, handleCapture };
};

export default CaptureDiv;

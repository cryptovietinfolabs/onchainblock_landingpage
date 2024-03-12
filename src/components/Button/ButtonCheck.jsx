import React from "react";

export default function ButtonCheck({
  setIsChecked,
  isChecked,
  handleToggleLabels,
}) {
  const handleVesting = () => {
    setIsChecked(!isChecked);
    handleToggleLabels();
  };
  return (
    <div className="flex items-center gap-2 px-4">
      <label className="relative gap-2 inline-flex items-center cursor-pointer">
        <span onClick={handleVesting} className={"text-sm text-text"}>
          Show/Hide All
        </span>
        <div className="relative">
          <input
            type="checkbox"
            value=""
            className="sr-only peer outline-none"
            checked={isChecked}
          />
          <div
            onClick={handleVesting}
            className={`w-9 h-5 rounded-full peer  ${
              isChecked ? "bg-main" : "bg-gray-400"
            } peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-600 peer-checked:bg-main`}
          ></div>
        </div>
      </label>
    </div>
  );
}

const formatValue = (value) => {
  const absValue = Math.abs(value);

  if (absValue >= 1e9) {
    return (
      (absValue / 1e9).toLocaleString(undefined, { maximumFractionDigits: 2 }) +
      "B"
    );
  } else if (absValue >= 1e6) {
    return (
      (absValue / 1e6).toLocaleString(undefined, { maximumFractionDigits: 2 }) +
      "M"
    );
  } else if (absValue >= 1e3) {
    return absValue.toLocaleString(undefined, { maximumFractionDigits: 0 });
  } else {
    return absValue.toLocaleString();
  }
};

export default formatValue;

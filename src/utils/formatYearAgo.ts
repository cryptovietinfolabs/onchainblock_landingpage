export const formatYearAgo = (theDate: Date) => {
  const yearAgoThatDate = new Date(theDate);
  yearAgoThatDate.setDate(theDate.getDate() - 365);

  const date = yearAgoThatDate.getDate();
  const month = yearAgoThatDate.getMonth() + 1;
  const year = yearAgoThatDate.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    date < 10 ? `0${date}` : `${date}`
  }`;
};

export const yearsList = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  while (startYear <= currentYear) {
    years.unshift(startYear++);
  }
  return years;
};

export const yearsList: number[] = [2019];

export const buildYearsList = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  while (startYear <= currentYear) {
    yearsList.unshift(startYear++);
  }
};

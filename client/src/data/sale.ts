export interface SalesData {
  year: number;
  sales: number[];
}

export const salesData: SalesData[] = [
  { year: 2022, sales: [1200, 1500, 1100, 1800, 1300, 1700, 1600, 1400, 1900, 2000, 2100, 2200] },
  { year: 2023, sales: [1300, 1600, 1150, 1850, 1400, 1750, 1650, 1450, 1950, 2050, 2150, 2250] },
  { year: 2024, sales: [1400, 1700, 1200, 1900, 1500, 1800, 1700, 1500, 2000, 2100, 2200, 2300] },
];

'use client';
import React, { useEffect, useState } from "react";
import ChartContainer from "@/components/atomic/chart-container";
import SalesChart from "@/components/molecules/sale-chart";
import { salesData } from "@/data/sale";

const SalesDashboard: React.FC = () => {
  const [year, setYear] = useState(2024);
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [threshold, setThreshold] = useState<number>(0);
  const [sales, setSales] = useState<number[]>([]);

  useEffect(() => {
    async function fetchSales() {
      const res = await fetch(`/api/sales?year=${year}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch sales: ${res.status}`);
      }
      const data = await res.json();
      setSales(data.sales);
    }

    fetchSales();
  }, [year]);

  const currentData = salesData.find((d) => d.year === year)?.sales || [];
  const filteredData = threshold > 0 ? currentData.map((s) => (s >= threshold ? s : 0)) : currentData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">📊 Sales Dashboard</h1>

      <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="threshold" className="text-gray-700 font-medium">
            Sales Threshold
          </label>
          <input
            id="threshold"
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            placeholder="Enter threshold"
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {[2024, 2023, 2022].map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                year === y
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {["bar", "line", "pie"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type as "bar" | "line" | "pie")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                chartType === type
                  ? "bg-green-600 text-white shadow"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <ChartContainer title={`Sales Data for ${year}`}>
        <SalesChart data={filteredData} chartType={chartType} year={year} />
      </ChartContainer>
    </div>
  );
};

export default SalesDashboard;

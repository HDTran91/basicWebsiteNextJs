import React from "react";
import SalesDashboard from "@/components/organisms/sale-dashboard";

const DashboardPage: React.FC = () => {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <SalesDashboard />
    </main>
  );
};

export default DashboardPage;

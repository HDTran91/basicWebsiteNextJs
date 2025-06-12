import React, { ReactNode } from "react";

interface ChartContainerProps {
  children: ReactNode;
  title: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ children, title }) => (
  <section className="p-4 bg-white rounded shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </section>
);

export default ChartContainer;

import React, { useEffect } from "react";
import { Chart } from "chart.js/auto";

const ProjectProgressChart = () => {
  useEffect(() => {
    const ctx = document.getElementById("projectProgress");

    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar", // or 'line', 'doughnut', etc.
      data: {
        labels: ["T2", "T3", "T4", "T5", "T6"],
        datasets: [
          {
            label: "Tiến độ",
            data: [3, 5, 2, 6, 4],
            backgroundColor: "#3b82f6",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800">Tiến độ dự án</h2>
        <div className="relative">
          <select className="appearance-none bg-gray-100 text-gray-700 py-2 pl-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
            <option>Tuần này</option>
            <option>Tháng này</option>
            <option>Quý này</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-64 relative">
        <canvas id="projectProgress" className="absolute top-0 left-0 w-full h-full"></canvas>
      </div>
    </div>
  );
};

export default ProjectProgressChart;

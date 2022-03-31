import React from "react";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData, circleColor }) {
  console.log(circleColor);
  return (
    <div className="rela">
      <div className="pieCircle"></div>
      <Doughnut data={chartData} className="pie" />
    </div>
  );
}

export default PieChart;

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], 
];

export const options = {
  title: "Daily Activities",
  pieHole: 0.45,
  is3D: false,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width=""
      height="65vh"
      data={data}
      options={options}
      className=" font-ramabhadra"
    />
  );
}

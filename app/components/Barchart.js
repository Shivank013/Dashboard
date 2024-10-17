import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Revenue in 2023"],
  ["Q1", 12000],
  ["Q2", 22000],
  ["Q3", 15000],
  ["Q4", 35000],
];

const dataNew = [
  ["Name", "Revenue in 2024"],
  ["Q1", 18000],
  ["Q2", 28000],
  ["Q3", 25000],
  ["Q4", 40000],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export default function Barchart() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
    />
  );
}

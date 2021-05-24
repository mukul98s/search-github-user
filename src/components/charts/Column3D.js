// STEP 1 - Include Dependencies
// Include react
import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import candy from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, candy);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Forked Repository",
        //Set the x-axis name
        xAxisName: "Repository",
        //Set the y-axis name
        yAxisName: "Forks",
        //Set the theme for your chart
        theme: "candy",
      },
      // Chart Data
      data: data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column3D;

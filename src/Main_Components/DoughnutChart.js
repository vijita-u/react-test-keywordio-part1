import React from "react";
import InsightsHeader from "../Sub_Components/InsightsHeader";
import Toggle from "../Sub_Components/Toggle";
import Chart from "./Chart";

function DoughnutChart({ isChart, setIsChart, handleMetrics, metric }) {
	return (
		<div className="doughnutChart adInsights__container">
			<InsightsHeader handleMetrics={handleMetrics} />
			<Chart metric={metric} />
			<Toggle isChart={isChart} setIsChart={setIsChart} />
		</div>
	);
}

export default DoughnutChart;

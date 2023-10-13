import React, { useEffect, useState } from "react";
import "./Chart.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data2 } from "../Sub_Components/data_table";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ metric }) {
	const [percentages, setPercentages] = useState([]);
	const maleColor = getComputedStyle(document.documentElement).getPropertyValue("--male-color");
	const femaleColor = getComputedStyle(document.documentElement).getPropertyValue("--female-color");
	const unknownColor = getComputedStyle(document.documentElement).getPropertyValue("--unknown-color");

	useEffect(() => {
		// Update the chart data when the metric prop changes
		setChartData({
			labels: data2.map((data) => data.campaigns),
			datasets: [
				{
					data: data2.map((data) => data[metric]),
					backgroundColor: [maleColor, femaleColor, unknownColor],
				},
			],
		});

		// Calculate the total of respective metric
		const total = data2.reduce((total, item) => total + item[metric], 0);

		// Calculate the percentage of resp metric for each category
		const percentages = data2.map((item) => ({
			campaign: item.campaigns,
			percentage: ((item[metric] / total) * 100).toFixed(0) + "%",
		}));
		setPercentages(percentages);
	}, [metric]); // Re-run the effect when metric changes

	const [chartData, setChartData] = useState({
		labels: data2.map((data) => data.campaigns),
		datasets: [
			{
				data: data2.map((data) => data[metric]),
				backgroundColor: [maleColor, femaleColor, unknownColor],
			},
		],
	});

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
		},
		tooltips: {
			enabled: true,
		},
		cutout: "60%",
	};

	return (
		<div className="chartDiv">
			<div className="chartDiv__doughnut">
				<Doughnut data={chartData} options={options} />
			</div>
			<div className="chartDiv__metrics">
				{percentages.map((item) => {
					return (
						<div className="chartDiv__metric">
							<div className="chartDiv__legendColor"></div>
							<p className="chartDiv__legendName">{item.percentage + " " + item.campaign}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Chart;

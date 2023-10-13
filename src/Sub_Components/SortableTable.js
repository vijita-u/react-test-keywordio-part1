import React, { useState } from "react";
import "./SortableTable.scss";

function SortableTable({ data, header, className }) {
	const [sortKey, setSortKey] = useState("id");
	const [sortOrder, setSortOrder] = useState("ascn");

	const totals = {
		totalClicks: 0,
		totalCost: 0,
		totalConversions: 0,
		totalRevenue: 0,
	};

	// Sorting function
	const sortedData = [...data].sort((a, b) => {
		// Get the values of sortKey for values "a" and "b"
		const aValue = a[sortKey];
		const bValue = b[sortKey];

		// Check the sort order to determine the sort direction (ascending or descending)
		if (sortOrder === "ascn") {
			// if aValue < bValue then return -1
			// else if aValue > bValue then return 1
			// else if aValue === bValue then return 0
			if (aValue < bValue) {
				return -1;
			} else if (aValue > bValue) {
				return 1;
			} else {
				return 0;
			}
		} else {
			// if aValue > bValue then return -1
			// else if aValue < bValue then return 1
			// else if aValue === bValue then return 0
			if (aValue > bValue) {
				return -1;
			} else if (aValue < bValue) {
				return 1;
			} else {
				return 0;
			}
		}
	});

	function handleSort(key) {
		if (key === sortKey) {
			// Toggle sort order if clicking the same column
			setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
		} else {
			// Set new sortKey and default to ascending order
			setSortKey(key);
			setSortOrder("ascn");
		}
	}

	return (
		<table className="sortableTable">
			<thead>
				<tr>
					{header.map((item) => {
						return (
							<th key={item.key}>
								<label className="sortableTable__headerLabel">
									<h5>{item.label}</h5>
									{item.key === sortKey && sortOrder === "ascn" ? (
										<svg
											onClick={() => handleSort(item.key)}
											className="sortableTable__sortIcon ascn"
											width="11"
											height="10"
											viewBox="0 0 11 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.46617 5.95384L5.49992 7.7455L3.53367 5.95384C3.44737 5.87538 3.33031 5.8313 3.20826 5.8313C3.0862 5.8313 2.96914 5.87538 2.88284 5.95384C2.79653 6.03229 2.74805 6.13871 2.74805 6.24967C2.74805 6.36063 2.79653 6.46704 2.88284 6.5455L5.17451 8.62883C5.21711 8.66789 5.26781 8.69889 5.32366 8.72004C5.37951 8.74119 5.43942 8.75208 5.49992 8.75208C5.56043 8.75208 5.62033 8.74119 5.67619 8.72004C5.73204 8.69889 5.78273 8.66789 5.82534 8.62883L8.117 6.5455C8.15974 6.50665 8.19364 6.46053 8.21677 6.40977C8.23989 6.35901 8.2518 6.30461 8.2518 6.24967C8.2518 6.19473 8.23989 6.14032 8.21677 6.08956C8.19364 6.03881 8.15974 5.99268 8.117 5.95384C8.07427 5.91499 8.02354 5.88417 7.9677 5.86314C7.91187 5.84212 7.85202 5.8313 7.79159 5.8313C7.73115 5.8313 7.67131 5.84212 7.61547 5.86314C7.55964 5.88417 7.50891 5.91499 7.46617 5.95384Z"
												fill="#DDDDDD"
												fill-opacity="0.866667"
											/>
											<path
												d="M3.53498 4.29645L5.49961 2.50593L7.46424 4.29645C7.50681 4.33548 7.55746 4.36645 7.61327 4.38759C7.66908 4.40873 7.72893 4.41962 7.78939 4.41962C7.84984 4.41962 7.9097 4.40873 7.96551 4.38759C8.02131 4.36645 8.07196 4.33548 8.11454 4.29645C8.15746 4.25774 8.19153 4.21168 8.21478 4.16094C8.23803 4.1102 8.25 4.05577 8.25 4.0008C8.25 3.94584 8.23803 3.89141 8.21478 3.84067C8.19153 3.78993 8.15746 3.74387 8.11454 3.70516L5.82476 1.62317C5.78219 1.58414 5.73153 1.55316 5.67573 1.53202C5.61992 1.51088 5.56006 1.5 5.49961 1.5C5.43915 1.5 5.3793 1.51088 5.32349 1.53202C5.26768 1.55316 5.21703 1.58414 5.17446 1.62317L2.88468 3.70516C2.84198 3.74399 2.80811 3.79008 2.785 3.8408C2.76189 3.89153 2.75 3.9459 2.75 4.0008C2.75 4.11169 2.79845 4.21804 2.88468 4.29645C2.97092 4.37486 3.08788 4.41891 3.20983 4.41891C3.33178 4.41891 3.44874 4.37486 3.53498 4.29645Z"
												fill="black"
											/>
										</svg>
									) : (
										<svg
											onClick={() => handleSort(item.key)}
											className="sortableTable__sortIcon desc"
											width="11"
											height="10"
											viewBox="0 0 11 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.46617 5.95384L5.49992 7.7455L3.53367 5.95384C3.44737 5.87538 3.33031 5.8313 3.20826 5.8313C3.0862 5.8313 2.96914 5.87538 2.88284 5.95384C2.79653 6.03229 2.74805 6.13871 2.74805 6.24967C2.74805 6.36063 2.79653 6.46704 2.88284 6.5455L5.17451 8.62883C5.21711 8.66789 5.26781 8.69889 5.32366 8.72004C5.37951 8.74119 5.43942 8.75208 5.49992 8.75208C5.56043 8.75208 5.62033 8.74119 5.67619 8.72004C5.73204 8.69889 5.78273 8.66789 5.82534 8.62883L8.117 6.5455C8.15974 6.50665 8.19364 6.46053 8.21677 6.40977C8.23989 6.35901 8.2518 6.30461 8.2518 6.24967C8.2518 6.19473 8.23989 6.14032 8.21677 6.08956C8.19364 6.03881 8.15974 5.99268 8.117 5.95384C8.07427 5.91499 8.02354 5.88417 7.9677 5.86314C7.91187 5.84212 7.85202 5.8313 7.79159 5.8313C7.73115 5.8313 7.67131 5.84212 7.61547 5.86314C7.55964 5.88417 7.50891 5.91499 7.46617 5.95384Z"
												fill="black"
											/>
											<path
												d="M3.53498 4.29645L5.49961 2.50593L7.46424 4.29645C7.50681 4.33548 7.55746 4.36645 7.61327 4.38759C7.66908 4.40873 7.72893 4.41962 7.78939 4.41962C7.84984 4.41962 7.9097 4.40873 7.96551 4.38759C8.02131 4.36645 8.07196 4.33548 8.11454 4.29645C8.15746 4.25774 8.19153 4.21168 8.21478 4.16094C8.23803 4.1102 8.25 4.05577 8.25 4.0008C8.25 3.94584 8.23803 3.89141 8.21478 3.84067C8.19153 3.78993 8.15746 3.74387 8.11454 3.70516L5.82476 1.62317C5.78219 1.58414 5.73153 1.55316 5.67573 1.53202C5.61992 1.51088 5.56006 1.5 5.49961 1.5C5.43915 1.5 5.3793 1.51088 5.32349 1.53202C5.26768 1.55316 5.21703 1.58414 5.17446 1.62317L2.88468 3.70516C2.84198 3.74399 2.80811 3.79008 2.785 3.8408C2.76189 3.89153 2.75 3.9459 2.75 4.0008C2.75 4.11169 2.79845 4.21804 2.88468 4.29645C2.97092 4.37486 3.08788 4.41891 3.20983 4.41891C3.33178 4.41891 3.44874 4.37486 3.53498 4.29645Z"
												fill="#DDDDDD"
												fill-opacity="0.866667"
											/>
										</svg>
									)}
								</label>
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{sortedData.map((item) => {
					totals.totalClicks += item.clicks;
					totals.totalCost += item.cost;
					totals.totalConversions += item.conversions;
					totals.totalRevenue += item.revenue;

					return (
						<tr key={item.id}>
							<td className="ta-l">{item.campaigns}</td>
							<td>{item.clicks}</td>
							<td>{"USD " + item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
							<td>{item.conversions}</td>
							<td>{"USD " + item.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
						</tr>
					);
				})}
				<tr className={`sortableTable__totalRow ${className}`}>
					<td className="ta-l">Total</td>
					<td>{totals.totalClicks}</td>
					<td>{"USD " + totals.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
					<td>{totals.totalConversions}</td>
					<td>{"USD " + totals.totalRevenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
				</tr>
			</tbody>
		</table>
	);
}

export default SortableTable;
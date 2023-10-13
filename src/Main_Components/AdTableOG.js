import React from "react";
import InsightsHeader from "../Sub_Components/InsightsHeader";
import SortableTable from "../Sub_Components/SortableTable";
import Toggle from "../Sub_Components/Toggle";

function AdTableOG({ data, header, dropdownVisibility, className, isChart, setIsChart, visibility }) {
	return (
		<div className="adInsights__container">
			<InsightsHeader dropdownVisibility={dropdownVisibility} />
			<SortableTable data={data} header={header} className={className} />
			<Toggle isChart={isChart} setIsChart={setIsChart} visibility={visibility} />
		</div>
	);
}

export default AdTableOG;

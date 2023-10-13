import React, { useEffect, useRef } from "react";
import "./Toggle.scss";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

function Toggle({ isChart, setIsChart, visibility }) {
	const highlightRef = useRef();

	useEffect(() => {
		if (!isChart) {
			highlightRef.current.style.transform = "translate(100%, 0%)";
		}
	}, [isChart]);

	return (
		<div className={`toggle ${visibility}`} onClick={() => setIsChart(!isChart)}>
			<label htmlFor="checkbox" className="toggle__highlight" ref={highlightRef}></label>
			<DonutLargeIcon className="toggle__icons" style={isChart ? { color: "white" } : { color: "black" }} />
			<TableChartOutlinedIcon
				className="toggle__icons"
				style={!isChart ? { color: "white" } : { color: "black" }}
			/>
		</div>
	);
}

export default Toggle;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import AdTableOG from "./Main_Components/AdTableOG";
import Navigation from "./Main_Components/Navigation";
import { data1, data2, headers } from "./Sub_Components/data_table";
import CreateAds from "./Main_Components/CreateAds";
import SuccessMessage from "./Main_Components/SuccessMessage";
import Form from "./Main_Components/Form";
import { useEffect, useState } from "react";
import DoughnutChart from "./Main_Components/DoughnutChart";

function App() {
	const createAdSelected = new Set();
	const [textAd, setTextAd] = useState(false);
	const [mediaAd, setMediaAd] = useState(false);
	const [buttonEnable, setButtonEnable] = useState(false);
	const [isChart, setIsChart] = useState(true);
	const [metric, setMetric] = useState("clicks");

	// empty the set
	const clearCreateAdSelected = () => {
		setTextAd(false);
		setMediaAd(false);
	};

	useEffect(() => {
		if (textAd) {
			createAdSelected.add("textAd");
		} else if (!textAd) {
			createAdSelected.delete("textAd");
		}
		if (mediaAd) {
			createAdSelected.add("mediaAd");
		} else if (!mediaAd) {
			createAdSelected.delete("mediaAd");
		}

		if (createAdSelected.size > 0) {
			setButtonEnable(true);
		} else {
			setButtonEnable(false);
		}
	}, [textAd, mediaAd, createAdSelected]);

	const handleMetrics = (event) => {
		console.log(event.target.value);
		setMetric(event.target.value);
	};

	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route
						path="/form-success"
						element={
							<>
								<SuccessMessage />
							</>
						}
					/>
					<Route
						path="/form"
						element={
							<>
								<Form
									createAdSelected={createAdSelected}
									clearCreateAdSelected={clearCreateAdSelected}
								/>
							</>
						}
					/>
					<Route
						path="/create-ads"
						element={
							<>
								<CreateAds
									setTextAd={setTextAd}
									setMediaAd={setMediaAd}
									createAdSelected={createAdSelected}
									buttonEnable={buttonEnable}
								/>
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<div className="dashboard__container">
									<AdTableOG
										data={data1}
										header={headers.table1}
										dropdownVisibility="hidden"
										visibility="hidden"
									/>
									{isChart ? (
										<DoughnutChart
											isChart={isChart}
											setIsChart={setIsChart}
											handleMetrics={handleMetrics}
											metric={metric}
										/>
									) : (
										<AdTableOG
											data={data2}
											header={headers.table2}
											className="bb"
											isChart={isChart}
											setIsChart={setIsChart}
											dropdownVisibility="hidden"
										/>
									)}
								</div>
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

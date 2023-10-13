import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAds.scss";
import CreateCard from "./CreateCard";
import TextAd from "../images/textAd.png";
import MediaAd from "../images/mediaAd.png";

function CreateAds({ setTextAd, setMediaAd, buttonEnable }) {
	
	const navigate = useNavigate();

	return (
		<div className="createAds">
			<h4 className="createAds__title">Create Ads</h4>
			<div className="createAds__container">
				<CreateCard
					image={TextAd}
					text="Text Ad"
					id="textAd"
					onClick={() => {
						setTextAd((prevTextAd) => {
							const newTextAd = !prevTextAd;
							return newTextAd;
						});
					}}
				/>
				<CreateCard
					image={MediaAd}
					text="Media Ad"
					id="mediaAd"
					onClick={() => {
						setMediaAd((prevMediaAd) => {
							const newMediaAd = !prevMediaAd;
							return newMediaAd;
						});
					}}
				/>
			</div>
			{buttonEnable ? (
				<button className="createAds__nextBtn" type="button" onClick={() => navigate("/form")}>
					Next
				</button>
			) : (
				<button className="createAds__nextBtn" type="button" disabled>
					Next
				</button>
			)}
		</div>
	);
}

export default CreateAds;

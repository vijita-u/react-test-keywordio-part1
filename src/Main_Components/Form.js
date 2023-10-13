import React from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";
import { boxInput1, boxInput2, boxInput3 } from "../Sub_Components/input_data";
import FormInput from "../Sub_Components/FormInput";

function Form({ createAdSelected, clearCreateAdSelected }) {
	const navigate = useNavigate();

	return (
		<div className="formPage createAds">
			<h4 className="createAds__title">Create Text & Media</h4>
			<form action="">
				<div className="formPage__partOne">
					{boxInput1.map((field) => {
						return (
							<FormInput
								key={field.id}
								id={field.id}
								type={field.type}
								placeholder={field.placeholder}
								title={field.title}
								height={field.height}
							/>
						);
					})}
				</div>
				{createAdSelected.has("mediaAd") && (
					<div className="formPage__partTwo">
						{boxInput2.map((field) => {
							return (
								<FormInput
									key={field.id}
									id={field.id}
									type={field.type}
									placeholder={field.placeholder}
									title={field.title}
									height={field.height}
								/>
							);
						})}
					</div>
				)}

				<div className="formPage__partThree">
					{boxInput3.map((field) => {
						return (
							<FormInput
								key={field.id}
								id={field.id}
								type={field.type}
								placeholder={field.placeholder}
								title={field.title}
							/>
						);
					})}
					<div className="formInput" id="buttonLabel">
						<label className="createAds__title" htmlFor="buttonLabel">
							Button Label
						</label>
						<select id="buttonLabel" name="buttonLabel" defaultValue="default" required>
							<option value="default" disabled>
								Select a label that best suits your ad
							</option>
						</select>
					</div>
				</div>
				<div className="formPage__buttons">
					<button
						className="formPage__backBtn"
						type="button"
						onClick={(e) => {
							e.preventDefault();
							clearCreateAdSelected();
							navigate("/create-ads");
						}}
					>
						Back
					</button>
					<button
						className="formPage__submitBtn"
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							clearCreateAdSelected();
							navigate("/form-success");
						}}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;

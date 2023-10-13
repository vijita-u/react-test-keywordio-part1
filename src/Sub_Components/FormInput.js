import React from "react";
import "./FormInput.scss";

function FormInput({ id, type, placeholder, title, height }) {
	return (
		<div id={id} className="formInput">
			<label className="createAds__title" htmlFor={id}>{title}</label>
			<input id={id} type={type} placeholder={placeholder} required style={{ height: {height} }} />
		</div>
	);
}

export default FormInput;

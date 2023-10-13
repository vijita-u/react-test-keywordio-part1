import React from "react";
import "./CreateCard.scss";

function CreateCard({ image, text, id, onClick }) {
	return (
		<div className="createCard">
			<input id={id} type="checkbox" className="createCard__checkbox" onClick={onClick} />
			<label htmlFor={id}>
				<div className="createCard__backdrop">
					<img src={image} alt={text} />
				</div>
				<div className="createCard__text">
					<small>Create</small>
					<h3>{text}</h3>
				</div>
			</label>
		</div>
	);
}

export default CreateCard;

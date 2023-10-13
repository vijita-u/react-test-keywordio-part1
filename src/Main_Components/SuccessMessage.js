import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessMessage.scss";

function SuccessMessage() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/create-ads", { replace: true });
		}, 600);
	}, []);

	return (
		<div className="createAds successMessage">
			<div className="successMessage__dialogBox">
				<div className="successMessage__message">
					<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="11" cy="11" r="11" fill="#0196FD" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.2409 7.5437C15.3725 7.67537 15.4465 7.85392 15.4465 8.0401C15.4465 8.22628 15.3725 8.40484 15.2409 8.53651L9.9782 13.7992C9.90865 13.8688 9.82608 13.9239 9.7352 13.9616C9.64433 13.9992 9.54692 14.0186 9.44856 14.0186C9.35019 14.0186 9.25279 13.9992 9.16191 13.9616C9.07104 13.9239 8.98847 13.8688 8.91892 13.7992L6.3042 11.1849C6.23713 11.1202 6.18365 11.0427 6.14685 10.957C6.11005 10.8714 6.09068 10.7792 6.08987 10.686C6.08906 10.5928 6.10683 10.5003 6.14213 10.414C6.17743 10.3277 6.22957 10.2493 6.29549 10.1834C6.36142 10.1175 6.43981 10.0654 6.5261 10.0301C6.61239 9.99475 6.70484 9.97699 6.79807 9.9778C6.8913 9.97861 6.98343 9.99798 7.0691 10.0348C7.15476 10.0716 7.23223 10.1251 7.297 10.1921L9.44832 12.3434L14.2476 7.5437C14.3128 7.47845 14.3902 7.42669 14.4754 7.39138C14.5607 7.35607 14.652 7.33789 14.7442 7.33789C14.8365 7.33789 14.9278 7.35607 15.013 7.39138C15.0983 7.42669 15.1757 7.47845 15.2409 7.5437Z"
							fill="white"
						/>
					</svg>
					<h3>Submitted</h3>
				</div>
			</div>
		</div>
	);
}

export default SuccessMessage;

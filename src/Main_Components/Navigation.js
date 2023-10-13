import React, { useEffect, useRef, useState } from "react";
import "./Navigation.scss";
import { useNavigate } from "react-router-dom";

function Navigation() {
	const navigate = useNavigate();
	const navRef = useRef(null);
	const [open, setOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(601);

	useEffect(() => {
		if (open) {
			navRef.current.classList.remove("close");
			navRef.current.classList.add("open");
		} else {
			navRef.current.classList.remove("open");
			navRef.current.classList.add("close");
		}
	}, [open]);

	useEffect(() => {
		// If window size is greater than 600px, open will automatically be set to false
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth);
		});

		if (windowWidth > 600) {
			setOpen(false);
            navRef.current.classList.remove("close");
		}
        else {
            navRef.current.classList.add("close");
        }
	}, [windowWidth]);

    useEffect(() => {
        if (window.innerWidth < 600) {
            navRef.current.classList.add("close");
        }
    }, [])

	return (
		<div className="navigation">
			<div className="navigation__logo">APP LOGO</div>
			<div
				className="navigation__hamburger"
				onClick={() => setOpen(!open)}
				style={open ? { gap: "0px" } : { gap: "0.5rem" }}
			>
				<span
					className="first"
					style={open ? { transform: "rotate(45deg)" } : { transform: "rotate(0deg)" }}
				></span>
				<span
					className="last"
					style={open ? { transform: "rotate(-45deg) translate(2px, -2px)" } : { transform: "rotate(0deg)" }}
				></span>
			</div>
			<nav className="navigation__navigate" ref={navRef}>
				<li onClick={() => navigate('/')}>DASHBOARD</li>
				<li onClick={() => navigate('/create-ads')}>CREATE ADS</li>
			</nav>
		</div>
	);
}

export default Navigation;

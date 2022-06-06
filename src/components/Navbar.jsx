import React from "react";
import { StyledNavbar, StyledNavbarButton } from "./styled/Navbar";

export const Navbar = () => {

	function onClick() {
		console.log("click!");
	}

	return (
		<StyledNavbar>
			<NavbarButton onClick={onClick}>NPCs</NavbarButton>
		</StyledNavbar>
	);
};

const NavbarButton = ({ children, onClick }) => {
	return (
		<StyledNavbarButton onClick={onClick}>{children}</StyledNavbarButton>
	);
};

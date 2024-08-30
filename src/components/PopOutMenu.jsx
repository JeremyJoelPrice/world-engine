import styled from "styled-components";
import { BodyText } from "./StyledText";
import { useEffect, useState } from "react";
import colors from "./Colors";

const PopOutMenu = ({ optionsArray, handleChange }) => {
	const [selected, setSelected] = useState(optionsArray[0]); // Initial selection
	const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls menu visibility
	const [hoveredIndex, setHoveredIndex] = useState(-1); // Tracks hovered option

	const handleMouseDown = () => {
		setIsMenuOpen(true);
	};

	const handleMouseUp = () => {
		if (hoveredIndex >= 0 && hoveredIndex < optionsArray.length) {
			setSelected(optionsArray[hoveredIndex]);
			handleChange(optionsArray[hoveredIndex]);
		}
		setIsMenuOpen(false);
		setHoveredIndex(-1);
	};

	const handleMouseMove = (e) => {
		// this function assumes all elements are of equal height
		if (isMenuOpen) {
			const boundingClientRectangle =
				e.currentTarget.getBoundingClientRect();
			const y = e.clientY - boundingClientRectangle.top; // Calculate mouse Y position relative to menu
			const itemHeight =
				boundingClientRectangle.height / optionsArray.length; // Height of each option
			const index = Math.floor(y / itemHeight); // Determine index of option currently hovered on
			setHoveredIndex(index);
		}
	};

	const handleMouseUpOffMenu = () => setIsMenuOpen(false); // for when the mouse is released but the cursor has moved off the menu

	useEffect(() => {
		if (isMenuOpen) {
			document.addEventListener("mouseup", handleMouseUpOffMenu);
		} else {
			document.removeEventListener("mouseup", handleMouseUpOffMenu);
		}

		return () => {
			document.removeEventListener("mouseup", handleMouseUpOffMenu);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuOpen]);

	return (
		<Container>
			<BodyText onMouseDown={handleMouseDown}>{selected}</BodyText>
			{isMenuOpen && (
				<Menu onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
					{optionsArray.map((option, index) => (
						<MenuOption
							key={index}
							$ishovered={index === hoveredIndex}>
							{option}
						</MenuOption>
					))}
				</Menu>
			)}
		</Container>
	);
};

export default PopOutMenu;

/* Styled Components */

const Container = styled.div`
	position: relative;
	display: inline-block;
	user-select: none;
`;

const Menu = styled.div`
	position: absolute;
	border: 1px solid #ccc;
	z-index: 1;
	cursor: pointer;

	background-color: purple;
`;

const MenuOption = styled(BodyText)`
	&:hover {
		background-color: ${colors.bluegrey};
	}
`;

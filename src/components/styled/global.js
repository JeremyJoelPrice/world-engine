import styled from "styled-components";

export const colors = {
	dark: "#272727",
	black: "#222",
	grey: "#696773",
	light: "#E4E3D3",
	orange: "#D36135",
	green: "#629460",
	white: "#FCFCFC"
};

export const dimensions = {
	large: "250px",
	medium: "100px",
	small: "30px"
};

export const StyledMain = styled.main`
	padding-left: 10%;
	padding-right: 20%;
	height: 100%;
	width: auto;
	background-color: ${colors.white};
	overflow: scroll;
`;

export const Buffer = styled.div`
	height: ${dimensions.small};
`;

export const FlexRow = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const FlexColumn = styled(FlexRow)`
	flex-direction: column;
	align-items: flex-start;
`;

export const Table = styled.table`
width: 100%;
	border: 1px solid ${colors.black};
	border-collapse: collapse;
`;
export const TableRow = styled.tr``;
export const TableCell = styled.td`
	border: 1px solid ${colors.black};
	border-collapse: collapse;
	padding: 2%;
`;

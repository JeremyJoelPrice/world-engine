import styled from "styled-components";
import { BodyText } from "./genericText";
import { colors, dimensions, FlexColumn } from "./global";

export const StyledNpcGen = styled.section`
	height: 100vh;
`;

export const StyledNpcBlock = styled.section``;

export const InterfaceLabel = styled(BodyText)``;
export const InterfaceForm = styled.form``;
export const InterfaceButton = styled.button`
	height: ${dimensions.small};
	width: 100%;
`;
export const InterfaceRadio = styled.input.attrs({ type: "radio" })`
	display: inline;
`;

export const FormColumn = styled(FlexColumn)`
	height: 100px;
`;

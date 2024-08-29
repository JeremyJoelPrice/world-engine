import styled from "styled-components";
import { BodyText, Subheader } from "../../components/StyledText";

const NpcNameListComponent = () => {
	const flavours = ["norse", "celtic", "latin"];

	return (
		<MainColumn>
			<Row>
				<BodyText>male</BodyText>
				<BodyText>female</BodyText>
			</Row>
			{flavours.map((flavour) => {
				return (
					<>
						<Subheader>{flavour}</Subheader>
						<Row>
							<ReplacerListItem flavour={flavour} sex="male" />
							<ReplacerListItem flavour={flavour} sex="female" />
						</Row>
					</>
				);
			})}
		</MainColumn>
	);
};

export default NpcNameListComponent;

/* other components */

const ReplacerListItem = ({ flavour, sex }) => {
	// const name = getName();
	return (
		<>
			<BodyText>
				{sex} {flavour} name
			</BodyText>
		</>
	);
};

/* styled components */

const MainColumn = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	gap: 60px;
`;

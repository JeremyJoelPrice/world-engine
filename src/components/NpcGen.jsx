import React, { useState } from "react";
import {
	BodyText,
	BoldBodyText,
	H1,
	H2,
	H3,
	ItalicsBodyText,
	SmallText
} from "./styled/genericText";
import {
	Buffer,
	FlexRow,
	Table,
	TableCell,
	TableRow
} from "./styled/global";
import {
	StyledNpcGen,
	StyledNpcBlock,
	InterfaceButton,
	InterfaceRadio,
	FormColumn
} from "./styled/NpcGen";
import { getNpcs, npcTemplates } from "../backend/npc generator/index";

export const NpcGen = () => {
	const [npcs, setNpcs] = useState([]);

	return (
		<StyledNpcGen>
			<H1>NPC Generator</H1>
			<Buffer />
			<Interface setNpcs={setNpcs} />
			<Buffer />
			<NpcBlock npcs={npcs} />
		</StyledNpcGen>
	);
};

const Interface = ({ setNpcs }) => {
	const [sex, setSex] = useState("random");
	const [descent, setDescent] = useState("random");
	const [numToGenerate, setNumToGenerate] = useState("1");
	const [npcType, setNpcType] = useState("background");

	async function onSubmit() {
		const params = npcTemplates[npcType];
		params.sex = sex;
		params.descent = descent;
		let num;
		switch (numToGenerate) {
			case "1":
				num = 1;
				break;
			case "2-4":
				num = Math.floor(Math.random() * 3 + 2);
				break;
			case "5-8":
				num = Math.floor(Math.random() * 4 + 5);
				break;
		}
		const npcs = getNpcs(params, num);
		console.log(params);
		setNpcs(npcs);
	}

	return (
		<section>
			<FlexRow>
				<SexMenu setSex={setSex} />
				<DescentMenu setDescent={setDescent} />
				<NumToGenerateMenu setNumToGenerate={setNumToGenerate} />
				<NpcTypeMenu setNpcType={setNpcType} />
			</FlexRow>
			<Buffer />
			<InterfaceButton onClick={onSubmit}>Generate</InterfaceButton>
		</section>
	);
};
const SexMenu = ({ sex, setSex }) => {
	const onChange = (e) => {
		setSex(e.target.value);
	};
	return (
		<form onChange={onChange}>
			<H3>Sex</H3>
			<FormColumn>
				<div>
					<InterfaceRadio name="sex" value="random" />
					<BodyText>Random</BodyText>
				</div>
				<div>
					<InterfaceRadio name="sex" value="male" />
					<BodyText>Male</BodyText>
				</div>
				<div>
					<InterfaceRadio name="sex" value="female" />
					<BodyText>Female</BodyText>
				</div>
			</FormColumn>
		</form>
	);
};
const DescentMenu = ({ setDescent }) => {
	const onChange = (e) => {
		setDescent(e.target.value);
	};
	return (
		<form onChange={onChange}>
			<H3>Descent</H3>
			<FormColumn>
				<div>
					<InterfaceRadio name="descent" value="random" />
					<BodyText>Random</BodyText>
				</div>
				<div>
					<InterfaceRadio name="descent" value="norræn" />
					<BodyText>Norræn</BodyText>
				</div>
				<div>
					<InterfaceRadio name="descent" value="woodlands" />
					<BodyText>Woodlands</BodyText>
				</div>
				<div>
					<InterfaceRadio name="descent" value="asculum" />
					<BodyText>Asculum</BodyText>
				</div>
			</FormColumn>
		</form>
	);
};
const NumToGenerateMenu = ({ setNumToGenerate }) => {
	const onChange = (e) => {
		setNumToGenerate(e.target.value);
	};
	return (
		<form onChange={onChange}>
			<H3>NumToGenerate</H3>
			<FormColumn>
				<div>
					<InterfaceRadio name="numToGenerate" value="1" />
					<BodyText>1</BodyText>
				</div>
				<div>
					<InterfaceRadio name="numToGenerate" value="2-4" />
					<BodyText>2-4</BodyText>
				</div>
				<div>
					<InterfaceRadio name="numToGenerate" value="5-8" />
					<BodyText>5-8</BodyText>
				</div>
			</FormColumn>
		</form>
	);
};
const NpcTypeMenu = ({ setNpcType }) => {
	const onChange = (e) => {
		setNpcType(e.target.value);
	};
	return (
		<form onChange={onChange}>
			<H3>NPC Type</H3>
			<FormColumn>
				<div>
					<InterfaceRadio name="npcType" value="background" />
					<BodyText>background</BodyText>
				</div>
				<div>
					<InterfaceRadio name="npcType" value="minor" />
					<BodyText>minor</BodyText>
				</div>
				<div>
					<InterfaceRadio name="npcType" value="significant" />
					<BodyText>significant</BodyText>
				</div>
				<div>
					<InterfaceRadio name="npcType" value="main" />
					<BodyText>main</BodyText>
				</div>
			</FormColumn>
		</form>
	);
};

const NpcBlock = ({ npcs }) => {
	return (
		<StyledNpcBlock>
			{npcs.map((npc) => {
				return (
					<Table key={Math.random()}>
						<tbody>
							<TableRow>
								<TableCell colSpan="2">
									<BoldBodyText>{npc.name}</BoldBodyText>
									<br />
									<SmallText>
										{npc.sex} of {npc.descent} descent
									</SmallText>
									<br />
									{npc.highConcept}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCellComponent
									title="Characterisation"
									content={npc.characterisation}
								/>
								<TableCellComponent
									title="Relationships"
									content={npc.relationships}
								/>
							</TableRow>
							<TableRow>
								<TableCellComponent
									title="Assets"
									content={npc.assets}
								/>
								<TableCellComponent
									title="Limits"
									content={npc.limits}
								/>
							</TableRow>
							<TableRow>
								<TableCellComponent
									title="Agebda"
									content={npc.agenda}
								/>
								<TableCellComponent
									title="Approach"
									content={npc.approach}
								/>
							</TableRow>
						</tbody>
					</Table>
				);
			})}
		</StyledNpcBlock>
	);
};

const TableCellComponent = ({ title, content }) => {
	if (!content) return null;

	if (typeof content === "string")
		return (
			<TableCell>
				<ItalicsBodyText>{title}</ItalicsBodyText>
				<div>{content}</div>
			</TableCell>
		);

	if (Array.isArray(content)) {
		if (typeof content[0] === "string")
			return (
				<TableCell>
					<ItalicsBodyText>{title}</ItalicsBodyText>
					{content.map((c) => (
						<div key={Math.random()}>
							<BodyText key={Math.random()}>{c}</BodyText>
						</div>
					))}
				</TableCell>
			);
		else {
			// display stats & name
			const statKey = Object.keys(content[0]);
			const stats = content[0][statKey];
			const filteredContent = content.filter(
				(c) => typeof c === "string"
			);
			return (
				<TableCell>
					<ItalicsBodyText>{title}</ItalicsBodyText>
					<div>
						<BodyText>{statKey}</BodyText>
					</div>
					<div>
						<SmallText>{stats}</SmallText>
					</div>
					{filteredContent.map((c) => (
						<div key={Math.random()}>
							<BodyText key={Math.random()}>{c}</BodyText>
						</div>
					))}
				</TableCell>
			);
		}
	}
};

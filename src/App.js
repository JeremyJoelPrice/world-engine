import { useState } from "react";
import styled from "styled-components";
import NpcGeneratorComponent from "./modules/npc generator/NpcGeneratorComponent";
import Navbar from "./components/Navbar";

const App = () => {
	const [currentPage, setCurrentPage] = useState(<NpcGeneratorComponent />);
	return (
		<div className="App">
			<AppContainer>
				<Navbar setCurrentPage={setCurrentPage} />
				<PageContainer>{currentPage}</PageContainer>
			</AppContainer>
		</div>
	);
};

export default App;

const AppContainer = styled.div`
	display: flex;
	height: 100vh;
	overflow: hidden;
`;

const PageContainer = styled.div`
	display: block;
	overflow-y: auto;
	flex-grow: 1;
`;

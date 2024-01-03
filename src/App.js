import { useState } from "react";
import styled from "styled-components";
import NpcGenerator from "./pages/NpcGenerator";
import Navbar from "./components/Navbar";

const App = () => {
	const [currentPage, setCurrentPage] = useState(<NpcGenerator />);
	return (
		<div className="App">
			<AppContainer>
				<Navbar setCurrentPage={setCurrentPage} />
				{currentPage}
			</AppContainer>
		</div>
	);
};

export default App;

const AppContainer = styled.div`
	display: flex;
	height: 100vh;
`;

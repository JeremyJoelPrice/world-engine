import styled from "styled-components";
import NpcGenerator from "./pages/NpcGenerator";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="App">
			<AppContainer>
				<Navbar />
				<NpcGenerator />
			</AppContainer>
		</div>
	);
};

export default App;

const AppContainer = styled.div`
	display: flex;
	height: 100vh;
`;

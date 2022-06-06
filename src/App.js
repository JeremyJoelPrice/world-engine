import React from "react";
import { StyledMain } from "./components/styled/global";
import { Navbar } from "./components";
import { NpcGen } from "./components/NpcGen";

function App() {
	return (
		<div className="App">
			<Navbar />
			<StyledMain>
				<NpcGen />
			</StyledMain>
		</div>
	);
}

export default App;

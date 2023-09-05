import { useState } from "react";
import SidePane from "./components/SidePane/SidePane";
import { Outlet } from "react-router-dom";

function App() {
	const views = ["View ML Models", "Create ML Model", "Load Data", "Preprocess Data", "Train Model", "Visualize Model", "Predict"];
	const [view, setView] = useState(views[0]);
	return (
		<div className="app">
			<SidePane views={views} view={view} setView={setView} />

			<Outlet />
		</div>
	);
}

export default App;

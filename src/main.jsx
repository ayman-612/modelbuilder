import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Create from "./components/Create/Create.jsx";
import View from "./components/View/View.jsx";
import Load from "./components/Load/Load.jsx";
import PreProcess from "./components/PreProcess/PreProcess.jsx";
import Train from "./components/Train/Train.jsx";
import Visualize from "./components/Visualize/Visualize.jsx";
import Predict from "./components/Predict/Predict.jsx";

import { CssVarsProvider } from "@mui/joy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/create",
				element: <Create />,
			},
			{
				path: "/view",
				element: <View />,
			},
			{
				path: "/load",
				element: <Load />,
			},
			{
				path: "/preprocess",
				element: <PreProcess />,
			},
			{
				path: "/train",
				element: <Train />,
			},
			{
				path: "/visualize",
				element: <Visualize />,
			},
			{
				path: "/predict",
				element: <Predict />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssVarsProvider defaultMode="dark">
			<RouterProvider router={router} />
		</CssVarsProvider>
	</React.StrictMode>
);

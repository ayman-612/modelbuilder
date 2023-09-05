import { useState } from "react";

import "./View.css";

const View = () => {
	return (
		<div>
			<h1>View Models</h1>
			<br></br>
			<br></br>
			<div className="models">
				<button className="model">Classification (Random Forest Classifier)</button>
				<button className="model">Clustering (K-Modes)</button>
				<button className="model">Regression (Logistic Regression)</button>
				<button className="model">Regression (Random Forest Regression)</button>
			</div>
		</div>
	);
};

export default View;

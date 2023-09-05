import { useState } from "react";
import { FormLabel, Select, Option, Button } from "@mui/joy";

import "./Train.css";

const Train = () => {
	return (
		<div>
			<h1>Train </h1>
			<form className="train">
				<FormLabel>Select ML model</FormLabel>
				<Select placeholder="Choose one…">
					<Option value="classification">Classification</Option>
					<Option value="clustering">Clustering</Option>
					<Option value="rf_regression">Random Forest Regression</Option>
					<Option value="logistic regression">Logistic Regression</Option>
				</Select>
				<FormLabel>Select dataset</FormLabel>
				<Select placeholder="Choose one…">
					<Option value="dataset 1">Dataset 1</Option>
					<Option value="dataset 2">Dataset 2</Option>
					<Option value="dataset 3">Dataset 3</Option>
				</Select>
				<Button color="neutral" size="lg">
					Train
				</Button>
			</form>
		</div>
	);
};

export default Train;

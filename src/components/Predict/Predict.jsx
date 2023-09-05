import { useState } from "react";

import "./Predict.css";
import { FormLabel, Input, Select, Option, Button } from "@mui/joy";

const Predict = () => {
	return (
		<div>
			<h1>Predict</h1>
			<form className="predict-form">
				<FormLabel>Age</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Gender</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Country</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Residence</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Education</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Employment status</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Employment</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Employment country</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>Marital status</FormLabel>
				<Input value="" color="neutral" placeholder="" size="lg" variant="outlined" />
				<FormLabel>ML model</FormLabel>
				<Select placeholder="Choose one…" size="lg">
					<Option value="classification">Classification</Option>
					<Option value="clustering">Clustering</Option>
					<Option value="logistic_regression">Logistic Regression</Option>
					<Option value="rf_regression">Random Forest Regression</Option>
				</Select>

				<Button color="neutral" size="lg">
					Predict
				</Button>
			</form>
		</div>
	);
};

export default Predict;

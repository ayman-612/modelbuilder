import { useState } from "react";

import "./Create.css";
import { FormLabel, Input, Select, Option, Textarea, Button, ToggleButtonGroup } from "@mui/joy";

const Create = () => {
	const [model, setModel] = useState("");
	const [layers, setLayers] = useState(1);
	const [func, setFunc] = useState("");
	const [clusters, setClusters] = useState(1);

	return (
		<div>
			<h1>Create Model</h1>
			<form className="create">
				<FormLabel>Model Type</FormLabel>
				<Select size="lg" placeholder="Choose one…" onChange={(_e, val) => setModel(val)}>
					<Option value="classification">Classification</Option>
					<Option value="clustering">Clustering</Option>
					<Option value="logistic_regression">Logistic Regression</Option>
					<Option value="rf_regression">Random Forest Regression</Option>
				</Select>
				{model === "classification" && (
					<>
						<FormLabel>Number of layers</FormLabel>

						<ToggleButtonGroup variant="soft" color="neutral" size="lg" value={layers.toString()} onChange={(_e, val) => setLayers(val)}>
							<Button value="1">1</Button>
							<Button value="2">2</Button>
							<Button value="3">3</Button>
						</ToggleButtonGroup>
					</>
				)}


				{model === "clustering" && (
					<>
						<FormLabel>Number of clusters</FormLabel>
						<ToggleButtonGroup variant="soft" color="neutral" size="lg" value={clusters.toString()} onChange={(_e, val) => setClusters(val)}>
							<Button value="1">1</Button>
							<Button value="2">2</Button>
							<Button value="3">3</Button>
							<Button value="4">4</Button>
							<Button value="5">5</Button>
							<Button value="6">6</Button>
							<Button value="7">7</Button>
						</ToggleButtonGroup>
					</>
				)}
				{model === "logistic_regression" && (
					<>
						<FormLabel>Activation function</FormLabel>
						<Select size="lg" placeholder="Choose one…" onChange={(_e, val) => setFunc(val)}>
							<Option value="sigmoid">Sigmoid</Option>
							<Option value="soft max">Soft max</Option>
						</Select>
					</>
				)}

				{model === "rf_regression" && (
					<>
						
					</>
				)}
				<Button color="neutral" size="lg">
					Create
				</Button>
			</form>
		</div>
	);
};

export default Create;

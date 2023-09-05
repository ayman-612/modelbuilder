import { useState } from "react";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import * as XLSX from "xlsx";

import "./Load.css";

const VisuallyHiddenInput = styled("input")`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	bottom: 0;
	left: 0;
	white-space: nowrap;
	width: 1px;
`;

const Load = () => {
	const [typeError, setTypeError] = useState(null);
	const [excelData, setExcelData] = useState(null);
	const upload = (e) => {
		console.log(e.target.files);
		let fileTypes = ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/csv"];
		let selectedFile = e.target.files[0];
		if (selectedFile) {
			if (selectedFile && fileTypes.includes(selectedFile.type)) {
				setTypeError(null);
				let reader = new FileReader();
				reader.readAsArrayBuffer(selectedFile);
				reader.onload = (e) => {
					console.log(e.target.result);
					const workbook = XLSX.read(e.target.result, { type: "buffer" });
					const worksheetName = workbook.SheetNames[0];
					const worksheet = workbook.Sheets[worksheetName];
					const data = XLSX.utils.sheet_to_json(worksheet);
					setExcelData(data.slice(0, 200));
				};
			} else {
				setTypeError("Please select only excel file types");
			}
		} else {
			console.log("Please select your file");
		}
	};

	if (typeError) alert(typeError);

	return (
		<div>
			<h1>Load Data</h1>
			<form className="load-form">
				<Button
					component="label"
					size="lg"
					role={undefined}
					tabIndex={-1}
					variant="outlined"
					color="neutral"
					startDecorator={
						<SvgIcon>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
							</svg>
						</SvgIcon>
					}
				>
					Upload a file
					<VisuallyHiddenInput type="file" accept=".csv, .xlsx, .xls, .ods, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={upload} />
				</Button>
			</form>
			{/* {typeError && (
				<div className="alert alert-danger" role="alert">
					{typeError}
				</div>
			)} */}

			{excelData ? (
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								{Object.keys(excelData[0]).map((key) => (
									<th key={key}>{key}</th>
								))}
							</tr>
						</thead>

						<tbody>
							{excelData.map((individualExcelData, index) => (
								<tr key={index}>
									{Object.keys(individualExcelData).map((key) => (
										<td key={key}>{individualExcelData[key]}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div>No file is uploaded yet</div>
			)}
		</div>
	);
};

export default Load;

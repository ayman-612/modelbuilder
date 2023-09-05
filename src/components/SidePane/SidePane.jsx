import { useState } from "react";

import "./SidePane.css";
import { NavLink } from "react-router-dom";

const SidePane = ({ views }) => {
	return (
		<div className="sidepane">
			{views.map((i) => (
				<NavLink key={i} to={i.split(" ")[0].toLowerCase()}>
					{i}
				</NavLink>
			))}
		</div>
	);
};

export default SidePane;

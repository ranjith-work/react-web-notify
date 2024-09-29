import React from "react";
import ReactDOM from "react-dom";
import WebNotify from "./WebNotify.jsx"; // Ensure the extension is correct

const webNotify = ({
	type = "info",
	position = "top-right",
	title,
	message,
}) => {
	const notificationRoot = document.createElement("div");
	document.body.appendChild(notificationRoot);

	ReactDOM.render(
		<WebNotify
			type={type}
			position={position}
			title={title}
			message={message}
		/>,
		notificationRoot
	);

	setTimeout(() => {
		ReactDOM.unmountComponentAtNode(notificationRoot);
		document.body.removeChild(notificationRoot);
	}, 5000); // Default duration
};

export default webNotify;

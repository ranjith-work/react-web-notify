import React, { useState, useEffect } from "react";

const WebNotify = ({
	type = "info",
	position = "top-right",
	title,
	message,
}) => {
	const [visible, setVisible] = useState(true);
	const duration = 5000; // Default duration of 5 seconds

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), duration);
		return () => clearTimeout(timer);
	}, []);

	if (!visible) return null;

	const positionStyles = {
		top: position.includes("top") ? "20px" : "",
		bottom: position.includes("bottom") ? "20px" : "",
		left: position.includes("left") ? "20px" : "",
		right: position.includes("right") ? "20px" : "",
		...(position.includes("center") && {
			left: "50%",
			transform: "translateX(-50%)",
		}),
	};

	const getIcon = (type) => {
		switch (type) {
			case "success":
				return "✅";
			case "error":
				return "❌";
			case "warning":
				return "⚠️";
			case "info":
			default:
				return "ℹ️";
		}
	};

	const notificationStyles = {
		position: "fixed",
		zIndex: 9999,
		borderRadius: "10px",
		padding: "10px",
		backgroundColor: "white",
		display: "flex",
		alignItems: "center",
		borderLeft: `5px solid ${
			type === "success"
				? "green"
				: type === "error"
				? "red"
				: type === "warning"
				? "orange"
				: "blue"
		}`,
		...positionStyles,
	};

	return (
		<div style={notificationStyles}>
			<span style={{ marginRight: "10px" }}>{getIcon(type)}</span>
			<div>
				<strong style={{ display: "block" }}>{title}</strong>
				<span>{message}</span>
			</div>
		</div>
	);
};

export default WebNotify;

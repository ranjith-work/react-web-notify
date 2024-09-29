import React, { useState, useEffect } from "react";
import "./WebNotify.css";

const WebNotify = ({
	type = "info", // Default type is info
	title,
	message,
	duration = 5000, // Make duration configurable, default to 5 seconds
}) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), duration);
		return () => clearTimeout(timer);
	}, [duration]);

	if (!visible) return null;

	// Choose the icon based on notification type
	const getIcon = (type) => {
		switch (type) {
			case "success":
				return "✅"; // Success icon
			case "error":
				return "❌"; // Error icon
			case "warning":
				return "⚠️"; // Warning icon
			case "info":
			default:
				return "ℹ️"; // Info icon
		}
	};

	return (
		<div className={`notification ${type}`}>
			<span className="icon">{getIcon(type)}</span>
			<div>
				<div className="title">{title}</div>
				<div className="message">{message}</div>
			</div>
		</div>
	);
};

export default WebNotify;

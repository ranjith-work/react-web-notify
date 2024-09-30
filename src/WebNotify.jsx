import React, { useState, useEffect } from "react";
import "./WebNotify.css";

const WebNotify = ({
	type = "info", // Default type is info
	title,
	message,
	position = "top-right", // Default to top-right
	titleIcon, // Dynamic titleIcon
	duration = 5000, // Make duration configurable, default to 5 seconds
}) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), duration);
		return () => clearTimeout(timer);
	}, [duration]);

	if (!visible) return null;

	// Choose the default icon based on notification type
	const getDefaultIcon = (type) => {
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
		<div className={`notification ${type} ${position}`}>
			{/* Use dynamic titleIcon if provided, otherwise fallback to default */}
			<span className="icon">{titleIcon || getDefaultIcon(type)}</span>
			<div>
				<div className="title">{title}</div>
				<div className="message">{message}</div>
			</div>
		</div>
	);
};

export default WebNotify;

import React, { useState, useEffect } from "react";
import "./WebNotify.css";

const WebNotify = ({
	type = "info", // Default type is info
	position = "top-right", // Default position
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

	// Positioning styles
	const positionStyles = {
		position: "fixed",
		zIndex: 9999,
		padding: "16px",
		maxWidth: "350px",
		transition: "all 0.3s ease-in-out",
		animationDelay: `0s, ${duration / 1000 - 0.5}s`, // Delay fadeOut dynamically
		...(position.includes("top") && { top: "20px" }),
		...(position.includes("bottom") && { bottom: "20px" }),
		...(position.includes("left") && { left: "20px" }),
		...(position.includes("right") && { right: "20px" }),
		...(position.includes("center") && {
			left: "50%",
			transform: "translateX(-50%)",
		}),
		...(position === "top-center" && { top: "20px" }),
		...(position === "bottom-center" && { bottom: "20px" }),
	};

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
		<div className={`notification ${type}`} style={positionStyles}>
			<span className="icon">{getIcon(type)}</span>
			<div>
				<div className="title">{title}</div>
				<div className="message">{message}</div>
			</div>
		</div>
	);
};

export default WebNotify;

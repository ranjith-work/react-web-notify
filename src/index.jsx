import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import WebNotify from "./WebNotify.jsx";

// Ensure the notification container exists in the DOM
let notificationRoot = document.getElementById("web-notification-root");

if (!notificationRoot) {
	notificationRoot = document.createElement("div");
	notificationRoot.id = "web-notification-root";
	document.body.appendChild(notificationRoot);
}

let notificationManagerRef = null;
let managerResolve; // To resolve when manager is ready

// Promise to wait for NotificationManager to be initialized
const managerReady = new Promise((resolve) => {
	managerResolve = resolve;
});

const NotificationManager = () => {
	const [notifications, setNotifications] = useState([]);

	// Function to add new notification
	const addNotification = ({
		type,
		position = "top-right", // Default position if not specified
		title,
		message,
		titleIcon, // New prop for dynamic titleIcon
		duration = 5000,
	}) => {
		const id = Date.now();
		setNotifications((prevNotifications) => [
			{ id, type, position, title, message, titleIcon, duration },
			...prevNotifications, // Add new notification on top
		]);

		// Remove the notification after duration
		setTimeout(() => {
			removeNotification(id);
		}, duration);
	};

	// Function to remove notification
	const removeNotification = (id) => {
		setNotifications((prevNotifications) =>
			prevNotifications.filter((notification) => notification.id !== id)
		);
	};

	useEffect(() => {
		notificationManagerRef = { addNotification };
		managerResolve(); // Resolve when the manager is ready
	}, []);

	// Get the first notification's position to apply the class dynamically to the container
	const notificationPosition =
		notifications.length > 0 ? notifications[0].position : "top-right";

	return (
		<div className={`rwn-notification-container ${notificationPosition}`}>
			{notifications.map(
				({ id, type, position, title, message, titleIcon, duration }) => (
					<WebNotify
						key={id}
						type={type}
						position={position}
						title={title}
						message={message}
						titleIcon={titleIcon} // Pass the titleIcon prop to WebNotify
						duration={duration}
					/>
				)
			)}
		</div>
	);
};

// Initialize and expose the notification manager
const webNotify = (props) => {
	// If notificationManagerRef is not yet initialized, render NotificationManager
	if (!notificationManagerRef) {
		const root = createRoot(notificationRoot);
		root.render(<NotificationManager />);
	}

	// Ensure manager is ready before adding notification
	managerReady.then(() => {
		notificationManagerRef.addNotification(props);
	});
};

export default webNotify;

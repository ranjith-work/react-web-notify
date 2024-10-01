# React Web Notify

React-Web-Notify is a highly customizable notification widget component built with React. It allows to have simple and easy web notifications in a web application.

## Features

- Easy to use
- Emoji / Icon support
- Lightweight
- Customizable duration
- Text-based feedback collection.
- Customizable position
- Allows multiple notifications
- Simple animations

## Installation

- You can install the widget from npm by running:
  `npm install react-web-notify`
- Usage
  To start using the react-web-notify widget in your project, import it and use it within your components.

```
import React from 'react';
import webNotify from "react-web-notify";

function App() {
  const handleShowNotification = () => {
		webNotify({
			type: "success",
			position: "top-right",
			duration: 5000,
			title: "This is notification title",
			message: "This is notification message",
		});
	};

  return (
    <div>
      <button onClick={handleShowNotification}>Show Notification</button>
    </div>
  );
}

export default App;
```

## Props Configuration

- `type`:
- - `success`: For showing success notification.
- - `error`: For showing error notification.
- - `warning`: For showing warning notification.
- - `info`: For showing information based notification.
- `position`: Position of the notification on the screen. Available positions:
- - `bottom-right`
- - `bottom-center`
- - `bottom-left`
- - `top-right`
- - `top-center`
- - `top-left`
- `duration`: default is 5000 ms
- `title`: Title of the notification
- `message`: Notification message
- `titleIcon`: Default title icons are : ✅ for success | ❌ for error | ⚠️ for warning | ℹ️ for info. Add a title icon to replace the existing one.

## Contributing

If you want to contribute to this project, feel free to submit pull requests or open issues for suggestions and bug reports.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

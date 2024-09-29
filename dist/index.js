'use strict';

var React = require('react');
var require$$0 = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var createRoot;

var m = require$$0__default["default"];
if (process.env.NODE_ENV === 'production') {
  createRoot = m.createRoot;
  m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* The notification container should be positioned in the top-right and use flexbox for stacking */\r\n#web-notification-root {\r\n\tposition: fixed;\r\n\ttop: 20px;\r\n\tright: 20px;\r\n\tz-index: 9999; /* Ensure it is on top of other elements */\r\n\tdisplay: flex;\r\n\tflex-direction: column; /* Stack notifications vertically */\r\n\tgap: 10px; /* Adds space between each notification */\r\n}\r\n\r\n/* Style individual notifications */\r\n.notification {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 16px;\r\n\tborder-radius: 8px;\r\n\tbox-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n\tbackground-color: white;\r\n\twidth: 300px; /* Adjust width as necessary */\r\n\tanimation: fadeIn 0.5s ease-in, fadeOut 0.5s ease-out forwards;\r\n\tanimation-delay: 0s, 4.5s;\r\n}\r\n\r\n/* Success Notification */\r\n.notification.success {\r\n\tbackground-color: #d4edda;\r\n\tborder-left: 4px solid #28a745;\r\n}\r\n\r\n/* Error Notification */\r\n.notification.error {\r\n\tbackground-color: #f8d7da;\r\n\tborder-left: 4px solid #dc3545;\r\n}\r\n\r\n/* Warning Notification */\r\n.notification.warning {\r\n\tbackground-color: #fff3cd;\r\n\tborder-left: 4px solid #ffc107;\r\n}\r\n\r\n/* Info Notification */\r\n.notification.info {\r\n\tbackground-color: #d1ecf1;\r\n\tborder-left: 4px solid #17a2b8;\r\n}\r\n\r\n/* The notification icon */\r\n.icon {\r\n\tmargin-right: 12px;\r\n\tfont-size: 24px;\r\n}\r\n\r\n/* Title styling */\r\n.title {\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 4px;\r\n}\r\n\r\n/* Message styling */\r\n.message {\r\n\tfont-size: 14px;\r\n}\r\n\r\n/* Animations */\r\n@keyframes fadeIn {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(20px);\r\n\t}\r\n\tto {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t}\r\n}\r\n\r\n@keyframes fadeOut {\r\n\tfrom {\r\n\t\topacity: 1;\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\tto {\r\n\t\topacity: 0;\r\n\t\ttransform: translateY(20px);\r\n\t}\r\n}\r\n";
styleInject(css_248z);

var WebNotify = function WebNotify(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "info" : _ref$type,
    title = _ref.title,
    message = _ref.message,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 5000 : _ref$duration;
  var _useState = React.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  React.useEffect(function () {
    var timer = setTimeout(function () {
      return setVisible(false);
    }, duration);
    return function () {
      return clearTimeout(timer);
    };
  }, [duration]);
  if (!visible) return null;

  // Choose the icon based on notification type
  var getIcon = function getIcon(type) {
    switch (type) {
      case "success":
        return "✅";
      // Success icon
      case "error":
        return "❌";
      // Error icon
      case "warning":
        return "⚠️";
      // Warning icon
      case "info":
      default:
        return "ℹ️";
      // Info icon
    }
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "notification ".concat(type)
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "icon"
  }, getIcon(type)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "message"
  }, message)));
};

// Ensure the notification container exists in the DOM
var notificationRoot = document.getElementById("web-notification-root");
if (!notificationRoot) {
  notificationRoot = document.createElement("div");
  notificationRoot.id = "web-notification-root";
  document.body.appendChild(notificationRoot);
}
var notificationManagerRef = null;
var managerResolve; // To resolve when manager is ready

// Promise to wait for NotificationManager to be initialized
var managerReady = new Promise(function (resolve) {
  managerResolve = resolve;
});
var NotificationManager = function NotificationManager() {
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    notifications = _useState2[0],
    setNotifications = _useState2[1];

  // Function to add new notification
  var addNotification = function addNotification(_ref) {
    var type = _ref.type,
      position = _ref.position,
      title = _ref.title,
      message = _ref.message,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5000 : _ref$duration;
    var id = Date.now();
    setNotifications(function (prevNotifications) {
      return [{
        id: id,
        type: type,
        position: position,
        title: title,
        message: message,
        duration: duration
      }].concat(_toConsumableArray(prevNotifications));
    });

    // Remove the notification after duration
    setTimeout(function () {
      removeNotification(id);
    }, duration);
  };

  // Function to remove notification
  var removeNotification = function removeNotification(id) {
    setNotifications(function (prevNotifications) {
      return prevNotifications.filter(function (notification) {
        return notification.id !== id;
      });
    });
  };
  React.useEffect(function () {
    notificationManagerRef = {
      addNotification: addNotification
    };
    managerResolve(); // Resolve when the manager is ready
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "notification-container"
  }, notifications.map(function (_ref2) {
    var id = _ref2.id,
      type = _ref2.type,
      position = _ref2.position,
      title = _ref2.title,
      message = _ref2.message,
      duration = _ref2.duration;
    return /*#__PURE__*/React__default["default"].createElement(WebNotify, {
      key: id,
      type: type,
      position: position,
      title: title,
      message: message,
      duration: duration
    });
  }));
};

// Initialize and expose the notification manager
var webNotify = function webNotify(props) {
  // If notificationManagerRef is not yet initialized, render NotificationManager
  if (!notificationManagerRef) {
    var root = createRoot(notificationRoot);
    root.render(/*#__PURE__*/React__default["default"].createElement(NotificationManager, null));
  }

  // Ensure manager is ready before adding notification
  managerReady.then(function () {
    notificationManagerRef.addNotification(props);
  });
};

module.exports = webNotify;

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var WebNotify = function WebNotify(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "info" : _ref$type,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "top-right" : _ref$position,
    title = _ref.title,
    message = _ref.message;
  var _useState = React.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var duration = 5000; // Default duration of 5 seconds

  React.useEffect(function () {
    var timer = setTimeout(function () {
      return setVisible(false);
    }, duration);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  if (!visible) return null;
  var positionStyles = _objectSpread2({
    top: position.includes("top") ? "20px" : "",
    bottom: position.includes("bottom") ? "20px" : "",
    left: position.includes("left") ? "20px" : "",
    right: position.includes("right") ? "20px" : ""
  }, position.includes("center") && {
    left: "50%",
    transform: "translateX(-50%)"
  });
  var getIcon = function getIcon(type) {
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
  var notificationStyles = _objectSpread2({
    position: "fixed",
    zIndex: 9999,
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    borderLeft: "5px solid ".concat(type === "success" ? "green" : type === "error" ? "red" : type === "warning" ? "orange" : "blue")
  }, positionStyles);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: notificationStyles
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      marginRight: "10px"
    }
  }, getIcon(type)), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("strong", {
    style: {
      display: "block"
    }
  }, title), /*#__PURE__*/React__default["default"].createElement("span", null, message)));
};

var webNotify = function webNotify(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "info" : _ref$type,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? "top-right" : _ref$position,
    title = _ref.title,
    message = _ref.message;
  var notificationRoot = document.createElement("div");
  document.body.appendChild(notificationRoot);
  ReactDOM__default["default"].render(/*#__PURE__*/React__default["default"].createElement(WebNotify, {
    type: type,
    position: position,
    title: title,
    message: message
  }), notificationRoot);
  setTimeout(function () {
    ReactDOM__default["default"].unmountComponentAtNode(notificationRoot);
    document.body.removeChild(notificationRoot);
  }, 5000); // Default duration
};

module.exports = webNotify;

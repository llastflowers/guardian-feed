"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Homepage_1 = __importDefault(require("./Homepage"));
// import '../styles/reset.css';
var Header = function () { return (react_1.default.createElement("header", null,
    react_1.default.createElement("h1", null, "Guardian Feed"))); };
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Header, null),
        react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Homepage_1.default })));
}
exports.default = App;

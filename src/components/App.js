"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
// import HomePage from './HomePage';
// import '../styles/reset.css';
var Header = function () { return (react_1.default.createElement("header", null,
    react_1.default.createElement("a", { href: "/" },
        react_1.default.createElement("h1", null, "Guardian Feed")))); };
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(Header, null)));
}
exports.default = App;

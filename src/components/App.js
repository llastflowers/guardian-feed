"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Homepage_1 = __importDefault(require("./Homepage"));
var styled_1 = __importDefault(require("@emotion/styled"));
var MainWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');\n \nheader {\n  background-color: rgba(32,85,132,255);\n  margin: 0;\n  height: 10vh;\n  text-align: center;\n  font-family: 'Arvo', serif;\n  font-size: 2em;\n  color: white;\n  }\n"], ["\n\n@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');\n \nheader {\n  background-color: rgba(32,85,132,255);\n  margin: 0;\n  height: 10vh;\n  text-align: center;\n  font-family: 'Arvo', serif;\n  font-size: 2em;\n  color: white;\n  }\n"])));
var Header = function () { return (react_1.default.createElement("header", null,
    react_1.default.createElement("h1", null, "Guardian Feed"))); };
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(MainWrapper, null,
            react_1.default.createElement(Header, null),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Homepage_1.default }))));
}
exports.default = App;
var templateObject_1;

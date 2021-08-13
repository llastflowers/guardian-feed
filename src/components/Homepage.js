"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var useStories_1 = __importDefault(require("../hooks/useStories"));
var Homepage = function () {
    var _a = react_1.useState(''), query = _a[0], setQuery = _a[1];
    var _b = react_1.useState(''), searchTerm = _b[0], setSearchTerm = _b[1];
    var storiesList = useStories_1.default(query);
    var handleSubmit = function (event) {
        event.preventDefault();
        setQuery(searchTerm);
    };
    var searchResults = storiesList.response.results.map(function (story) {
        return react_1.default.createElement("li", { key: story.id },
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: { pathname: "https://www.theguardian.com/" + story.id }, target: "_blank" },
                    react_1.default.createElement("img", { src: story.fields.thumbnail }),
                    react_1.default.createElement("p", null, story.webTitle),
                    react_1.default.createElement("p", null, story.webPublicationDate),
                    react_1.default.createElement("p", null, story.fields.trailText))));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("input", { type: 'text', value: searchTerm, onChange: function (_a) {
                    var target = _a.target;
                    return setSearchTerm(target.value);
                } }),
            react_1.default.createElement("button", null, "Search")),
        react_1.default.createElement("ul", null, searchResults)));
};
exports.default = Homepage;

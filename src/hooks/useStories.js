"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStories = void 0;
var react_1 = require("react");
var newsAPI_1 = require("../services/newsAPI");
var useStories = function (query) {
    var _a = react_1.useState({
        response: {
            results: []
        }
    }), stories = _a[0], setStories = _a[1];
    react_1.useEffect(function () {
        if (query) {
            newsAPI_1.getStories(query)
                .then(function (searchResults) { return setStories(searchResults); });
        }
        else {
            newsAPI_1.getAllStories(query)
                .then(function (searchResults) { return setStories(searchResults); });
        }
    }, [query]);
    return stories;
};
exports.useStories = useStories;

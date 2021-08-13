"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var newsAPI_1 = require("../services/newsAPI");
var useStories = function (query) {
    var _a = react_1.useState({ response: { results: [] } }), stories = _a[0], setStories = _a[1];
    // useEffect(() => {
    //   if(query == '') {
    //     getAllStories(query);
    //   }
    // }, [query]);
    // return stories;
    // };
    react_1.useEffect(function () {
        if (query !== '') {
            newsAPI_1.getStories(query)
                .then(function (searchResults) { return setStories(searchResults); });
        }
    }, [query]);
    return stories;
};
exports.default = useStories;

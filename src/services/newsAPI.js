"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStories = exports.getAllStories = void 0;
var getAllStories = function (query) {
    // eslint-disable-next-line
    return fetch("https://content.guardianapis.com/search?&page-size=12&show-fields=trailText,thumbnail&api-key=" + process.env.GUARDIAN_API_KEY)
        .then(function (res) { return res.json(); });
};
exports.getAllStories = getAllStories;
var getStories = function (query) {
    // eslint-disable-next-line
    return fetch("https://content.guardianapis.com/search?q=" + query + "&page-size=12&show-fields=trailText,thumbnail&api-key=" + process.env.GUARDIAN_API_KEY)
        .then(function (res) { return res.json(); });
};
exports.getStories = getStories;

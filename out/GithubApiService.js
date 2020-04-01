"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var IndexBanner_1 = require("./IndexBanner");
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (callback) {
        request_1.default.get("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php", function (error, response, body) {
            var responseBody = JSON.parse(body);
            var indexBanner = new IndexBanner_1.IndexBanner(responseBody);
            callback(indexBanner);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;

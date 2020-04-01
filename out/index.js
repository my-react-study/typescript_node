"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var express_1 = __importDefault(require("express"));
//express配置
var app = express_1.default();
app.listen(3000, function () {
    console.log("server running port 3000");
});
//接口配置
var apiService = new GithubApiService_1.GithubApiService();
app.get("/indexBanner", function (req, res) {
    apiService.getUserInfo(function (indexBanner) {
        console.log(indexBanner);
        res.send(indexBanner);
    });
});

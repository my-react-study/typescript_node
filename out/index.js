"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var apiService = new GithubApiService_1.GithubApiService();
apiService.getUserInfo(function (indexBanner) {
    console.log(indexBanner);
});

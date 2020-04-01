import { GithubApiService } from "./GithubApiService";
import { IndexBanner } from "./IndexBanner";
import express from "express";

//express配置
const app = express();
app.listen(3000, () => {
  console.log("server running port 3000");
});

//接口配置
let apiService: GithubApiService = new GithubApiService();

app.get("/indexBanner", (req, res) => {
  apiService.getUserInfo((indexBanner: IndexBanner) => {
    console.log(indexBanner);
    res.send(indexBanner);
  });
});

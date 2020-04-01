import { GithubApiService } from "./GithubApiService";
import { IndexBanner } from "./IndexBanner";

let apiService: GithubApiService = new GithubApiService();

console.log(
  apiService.getUserInfo((indexBanner: IndexBanner) => {
    console.log(indexBanner);
  })
);

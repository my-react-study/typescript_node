import { GithubApiService } from "./GithubApiService";
import { IndexBanner } from "./IndexBanner";

let apiService: GithubApiService = new GithubApiService();

apiService.getUserInfo((indexBanner: IndexBanner) => {
  console.log(indexBanner);
});

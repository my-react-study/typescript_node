import request from "request";
import { IndexBanner } from "./IndexBanner";
export class GithubApiService {
  getUserInfo(callback: any) {
    request.get(
      "http://iwenwiki.com/api/blueberrypai/getIndexBanner.php",
      (error: any, response: any, body: any) => {
        const responseBody = JSON.parse(body);
        let indexBanner: IndexBanner = new IndexBanner(responseBody);
        callback(indexBanner);
      }
    );
  }
}

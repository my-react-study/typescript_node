"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexBanner = /** @class */ (function () {
    function IndexBanner(response) {
        this.success = response.success;
        this.msg = response.msg;
        this.banner = response.banner;
    }
    return IndexBanner;
}());
exports.IndexBanner = IndexBanner;

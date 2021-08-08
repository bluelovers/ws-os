"use strict";
/**
 * Created by user on 2020/5/7.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_homedir = void 0;
const path_1 = require("path");
const os_1 = require("os");
function get_homedir(opts) {
    let _homedir;
    if (isDefined(opts === null || opts === void 0 ? void 0 : opts.homedir)) {
        _homedir = opts.homedir;
    }
    else if (isDefined(opts === null || opts === void 0 ? void 0 : opts.username)) {
        _homedir = (0, path_1.join)((0, path_1.dirname)((0, os_1.homedir)()), opts.username);
    }
    else {
        _homedir = (0, os_1.homedir)();
    }
    return _homedir;
}
exports.get_homedir = get_homedir;
function isDefined(value) {
    return value !== null && value !== void 0;
}
exports.default = get_homedir;
//# sourceMappingURL=index.js.map
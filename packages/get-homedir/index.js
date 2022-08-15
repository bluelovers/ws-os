"use strict";
/**
 * Created by user on 2020/5/7.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomeDirectory = void 0;
const path_1 = require("path");
const os_1 = require("os");
function getHomeDirectory(opts) {
    let _homedir;
    opts !== null && opts !== void 0 ? opts : (opts = {});
    if (isDefined(opts.homedir)) {
        _homedir = opts.homedir;
    }
    else if (isDefined(opts.username)) {
        _homedir = (0, path_1.resolve)((0, path_1.dirname)((0, os_1.homedir)()), opts.username);
    }
    else {
        _homedir = (0, os_1.homedir)();
    }
    return _homedir;
}
exports.getHomeDirectory = getHomeDirectory;
function isDefined(value) {
    return value !== null && value !== void 0;
}
exports.default = getHomeDirectory;
//# sourceMappingURL=index.js.map
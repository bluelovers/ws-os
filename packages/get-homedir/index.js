"use strict";
/**
 * Created by user on 2020/5/7.
 */
const path_1 = require("path");
const os_1 = require("os");
function isDefined(value) {
    return value !== null && value !== void 0;
}
module.exports = function get_homedir(opts) {
    let _homedir;
    if (isDefined(opts === null || opts === void 0 ? void 0 : opts.homedir)) {
        _homedir = opts.homedir;
    }
    else if (isDefined(opts === null || opts === void 0 ? void 0 : opts.username)) {
        _homedir = path_1.join(path_1.dirname(os_1.homedir()), opts.username);
    }
    else {
        _homedir = os_1.homedir();
    }
    return _homedir;
};
//# sourceMappingURL=index.js.map
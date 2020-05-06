"use strict";
/**
 * Created by user on 2020/5/7.
 */
const os_1 = require("os");
const path_1 = require("path");
module.exports = function winAppdataLocal() {
    var _a;
    if (os_1.platform() !== 'win32') {
        throw new Error(`current os is not win32`);
    }
    return (_a = process.env.LOCALAPPDATA) !== null && _a !== void 0 ? _a : path_1.join(os_1.homedir(), 'AppData', 'Local');
};
//# sourceMappingURL=index.js.map
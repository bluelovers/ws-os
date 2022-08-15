"use strict";
/**
 * Created by user on 2020/5/7.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.winAppdataLocal = void 0;
const os_1 = require("os");
const path_1 = require("path");
function winAppdataLocal() {
    var _a;
    if ((0, os_1.platform)() !== 'win32') {
        throw new Error(`current os is not win32`);
    }
    return (_a = process.env['LOCALAPPDATA']) !== null && _a !== void 0 ? _a : (0, path_1.join)((0, os_1.homedir)(), 'AppData', 'Local');
}
exports.winAppdataLocal = winAppdataLocal;
exports.default = winAppdataLocal;
//# sourceMappingURL=index.js.map
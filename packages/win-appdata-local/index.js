"use strict";
/**
 * Created by user on 2020/5/7.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.winAppdataLocal = void 0;
const os_1 = require("os");
const path_1 = require("path");
const get_homedir_1 = require("get-homedir");
function winAppdataLocal(opts) {
    if ((0, os_1.platform)() !== 'win32') {
        throw new Error(`current os is not win32`);
    }
    return process.env['LOCALAPPDATA'] || (0, path_1.join)((0, get_homedir_1.getHomeDirectory)(opts), 'AppData', 'Local');
}
exports.winAppdataLocal = winAppdataLocal;
exports.default = winAppdataLocal;
//# sourceMappingURL=index.js.map
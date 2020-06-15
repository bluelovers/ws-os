"use strict";
/**
 * Created by user on 2019/5/19.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeWindows = void 0;
const cross_spawn_extra_1 = __importDefault(require("cross-spawn-extra"));
const util_1 = require("../util");
const path_1 = require("path");
function localeWindows() {
    let cp = cross_spawn_extra_1.default.sync(path_1.join(util_1.PROJECT_ROOT, 'script', 'get_locale.cmd'), {
        stripAnsi: true,
    });
    if (!cp.error && cp.stdout) {
        let data = util_1.lineSplitLike(cp.stdout);
        //console.dir(data);
        if (data['SYSTEM_LOCALE']) {
            return data['SYSTEM_LOCALE'];
        }
    }
    return null;
}
exports.localeWindows = localeWindows;
exports.default = localeWindows;
//# sourceMappingURL=win.js.map
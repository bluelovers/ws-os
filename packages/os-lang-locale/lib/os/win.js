"use strict";
/**
 * Created by user on 2019/5/19.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeWindows = void 0;
const tslib_1 = require("tslib");
const cross_spawn_extra_1 = (0, tslib_1.__importDefault)(require("cross-spawn-extra"));
const util_1 = require("../util");
const path_1 = require("path");
function localeWindows() {
    let cp = cross_spawn_extra_1.default.sync((0, path_1.join)(util_1.PROJECT_ROOT, 'script', 'get_locale.cmd'), {
        stripAnsi: true,
    });
    if (!cp.error && cp.stdout) {
        let data = (0, util_1.lineSplitLike)(cp.stdout);
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
"use strict";
/**
 * Created by user on 2019/5/19.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeWindows = void 0;
const cross_spawn_extra_1 = require("cross-spawn-extra");
const util_1 = require("../util");
const path_1 = require("path");
function localeWindows() {
    let cp = (0, cross_spawn_extra_1.sync)((0, path_1.join)(util_1.PROJECT_ROOT, 'script', 'get_locale.cmd'), {
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
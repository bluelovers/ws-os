"use strict";
/**
 * Created by user on 2019/5/19.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeOther = void 0;
const cross_spawn_extra_1 = require("cross-spawn-extra");
const util_1 = require("../util");
function localeOther() {
    let cp = (0, cross_spawn_extra_1.sync)('locale', {
        stripAnsi: true,
    });
    if (!cp.error && cp.stdout) {
        let data = (0, util_1.lineSplitLike)(cp.stdout);
        if (data.LANG) {
            return data.LANG
                .replace(/\.\S+/, '');
        }
    }
    return null;
}
exports.localeOther = localeOther;
exports.default = localeOther;
//# sourceMappingURL=other.js.map
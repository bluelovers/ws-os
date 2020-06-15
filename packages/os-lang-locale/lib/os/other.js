"use strict";
/**
 * Created by user on 2019/5/19.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeOther = void 0;
const cross_spawn_extra_1 = __importDefault(require("cross-spawn-extra"));
const util_1 = require("../util");
function localeOther() {
    let cp = cross_spawn_extra_1.default.sync('locale', {
        stripAnsi: true,
    });
    if (!cp.error && cp.stdout) {
        let data = util_1.lineSplitLike(cp.stdout);
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
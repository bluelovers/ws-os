"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeCallback = exports.localeAsync = exports.locale = void 0;
const tslib_1 = require("tslib");
const os_1 = require("os");
const win_1 = require("./lib/os/win");
const other_1 = require("./lib/os/other");
const err_cause_1 = (0, tslib_1.__importDefault)(require("err-cause"));
function locale(failbackLocale) {
    let lang;
    let err;
    try {
        switch ((0, os_1.platform)()) {
            case 'win32':
                lang = (0, win_1.localeWindows)();
                break;
            default:
                lang = (0, other_1.localeOther)();
                break;
        }
    }
    catch (e) {
        err = e;
    }
    lang !== null && lang !== void 0 ? lang : (lang = failbackLocale);
    if (!lang) {
        throw (0, err_cause_1.default)(new Error(`can't detect locale lang`), err);
    }
    return lang;
}
exports.locale = locale;
async function localeAsync(failbackLocale) {
    return locale(failbackLocale);
}
exports.localeAsync = localeAsync;
function localeCallback(cb, failbackLocale) {
    try {
        cb(null, locale(failbackLocale));
    }
    catch (e) {
        cb(e, null);
    }
}
exports.localeCallback = localeCallback;
exports.default = locale;
//# sourceMappingURL=index.js.map
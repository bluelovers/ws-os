"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localeCallback = exports.localeAsync = exports.locale = void 0;
const os_1 = require("os");
const win_1 = __importDefault(require("./lib/os/win"));
const other_1 = __importDefault(require("./lib/os/other"));
function locale() {
    let lang;
    switch (os_1.platform()) {
        case 'win32':
            lang = win_1.default();
            break;
        default:
            lang = other_1.default();
            break;
    }
    if (!lang) {
        throw new Error(`can't detect locale lang`);
    }
    return lang;
}
exports.locale = locale;
async function localeAsync() {
    return locale();
}
exports.localeAsync = localeAsync;
function localeCallback(cb) {
    try {
        cb(null, locale());
    }
    catch (e) {
        cb(e, null);
    }
}
exports.localeCallback = localeCallback;
exports.default = locale;
//# sourceMappingURL=index.js.map
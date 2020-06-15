"use strict";
/**
 * Created by user on 2019/5/19.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineSplitLike = exports.stripString = exports.bufString = exports.decodeBuffer = exports.PROJECT_ROOT = void 0;
const iconv_jschardet_1 = require("iconv-jschardet");
const crlf_normalize_1 = require("crlf-normalize");
const path_1 = require("path");
exports.PROJECT_ROOT = path_1.resolve(__dirname, '..');
function decodeBuffer(buf) {
    return iconv_jschardet_1.BufferFrom(buf, "utf8" /* UTF8 */);
}
exports.decodeBuffer = decodeBuffer;
function bufString(buf) {
    return crlf_normalize_1.crlf(decodeBuffer(buf).toString());
}
exports.bufString = bufString;
function stripString(input) {
    return input.trim().replace(/^(["'])(.*)\1$/, '$2').trim();
}
exports.stripString = stripString;
function lineSplitLike(input) {
    return bufString(input)
        .split(crlf_normalize_1.LF)
        .reduce((a, b) => {
        let m = b.trim().match(/^([^=]+)=(.*)$/);
        if (m) {
            // @ts-ignore
            a[m[1]] = stripString(m[2]);
        }
        return a;
    }, {});
}
exports.lineSplitLike = lineSplitLike;
//# sourceMappingURL=util.js.map
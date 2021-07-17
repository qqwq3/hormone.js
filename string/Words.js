"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 将字符串转换为单词数组
 * example: words('I love javaScript!!'); // ["I", "love", "javaScript"]
 *          words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
 * args: str, pattern
 * */
var Words = function (str, pattern) {
    if (pattern === void 0) { pattern = /[^a-zA-Z-]+/; }
    return str.split(pattern).filter(Boolean);
};
exports.default = Words;

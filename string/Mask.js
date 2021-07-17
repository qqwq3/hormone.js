"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * name: 遮蔽字符串
 * example: mask('18883141271'); // '******1271'
 *          mask('18883141271', 3); // '*******271'
 *          mask('18883141271', 3, '$'); // '$$$$$$$$271'
 * args: cc -> 参数值, num -> 显示几位，mask -> 代替符
 * */
var Mask = function (cc, num, mask) {
    if (num === void 0) { num = 4; }
    if (mask === void 0) { mask = '*'; }
    return ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);
};
exports.default = Mask;

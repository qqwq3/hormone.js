"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CheckEmpty_1 = __importDefault(require("../type/CheckEmpty"));
var matching = function (_a) {
    var prefix = _a.prefix, change = _a.change, unit = _a.unit;
    var str = '';
    var len = prefix.length;
    for (var i = 0; i < len; i++) {
        var s1 = (i > 0 && parseInt(prefix[i]) === 0 && (parseInt(prefix[i - 1]) === 0) ? '' : change[prefix[i]]) + (parseInt(prefix[i]) === 0 ? unit[0] : unit[len - i - 1]);
        str += s1;
    }
    if (str.charAt(str.length - 1) === change[0]) {
        str = str.substr(0, str.length - 1);
    }
    return str;
};
var calculation = function (_a) {
    var n = _a.n, prefix = _a.prefix, change = _a.change, unit = _a.unit;
    var str = '';
    if (n.length > 5) {
        var pre = n.substr(0, n.length - 4);
        var suf = n.substr(n.length - 4);
        str = matching({ prefix: pre.split(''), change: change, unit: unit });
        var sufStr = matching({ prefix: suf.split(''), change: change, unit: unit });
        if (pre.length < 5) {
            str = str + '万' + sufStr;
        }
        else {
            var innerPre = pre.substr(0, pre.length - 4);
            var innerSuf = pre.substr(pre.length - 4);
            if (innerPre.length <= 5) {
                str = matching({ prefix: innerPre.split(''), change: change, unit: unit });
                var innerSufStr = matching({ prefix: innerSuf.split(''), change: change, unit: unit });
                str = str + "\u4EBF" + (innerSufStr ? innerSufStr + "\u4E07" : '') + sufStr;
            }
            else {
                str = '';
                console.error('error: ' + '该函数目前支持最大数单位为（万亿）');
            }
        }
    }
    else {
        str = matching({ prefix: prefix, change: change, unit: unit });
    }
    return str;
};
var ToChinesNum = function (_a) {
    var num = _a.num, _b = _a.capitalize, capitalize = _b === void 0 ? false : _b, _c = _a.suf, suf = _c === void 0 ? '' : _c, _d = _a.digits, digits = _d === void 0 ? 2 : _d;
    try {
        if (!num || CheckEmpty_1.default(num) || isNaN(num)) {
            return '零';
        }
        var change_1 = !capitalize ? ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'] : ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = !capitalize ? ['', '十', '百', '千', '万'] : ['', '拾', '佰', '仟', '万'];
        var ot = ['负', '点'];
        var str = '';
        var t = parseFloat(parseFloat(num).toFixed(digits)).toString();
        var s = t.split(''), c = s.includes('-'), g = c ? s.slice(1) : s;
        if (g.includes('.')) {
            var q = g.join('').split('.'), prefix = q[0].split(''), suffix = q[1].split('');
            str = calculation({ n: q[0], prefix: prefix, change: change_1, unit: unit });
            var dotStr_1 = '';
            suffix.forEach(function (v) { return dotStr_1 += change_1[v]; });
            str = "" + (str ? str : change_1[0]) + ot[1] + dotStr_1;
        }
        else {
            var q = g.join(''), prefix = q.split('');
            str = calculation({ n: q, prefix: prefix, change: change_1, unit: unit });
        }
        str = "" + (c ? ot[0] : '') + (str ? str : change_1[0]);
        return suf ? str + suf : str;
    }
    catch (e) {
        return console.error('error: ' + e.message);
    }
};
exports.default = ToChinesNum;

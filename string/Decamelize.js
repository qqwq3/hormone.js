"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var separateWords = function (str, options) {
    if (options === void 0) { options = {}; }
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;
    return str.split(split).join(separator);
};
/**
 * name: 将大小写字符串转换为下划线分隔的字符串
 * example: decamelize('helloWorldFooBar'); // 'hello_world_foo_bar'
 *          decamelize('helloWorldFooBar', { separator: '-' }); // 'hello-world-foo-bar'
 *          decamelize('helloWorld1', { split: /(?=[A-Z0-9])/ }); // 'hello_world_1'
 * args: str, options
 * */
var Decamelize = function (str, options) { return separateWords(str, options).toLowerCase(); };
exports.default = Decamelize;

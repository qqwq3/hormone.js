#### 一个简单又实用的 JavaScript 工具库
##### 开始
```js
npm install hormone.js --save
```
##### 引入
```js
// 方式一
import * as hormone from 'hormone.js';
// 方式二
import {chunk, compact, flatten, ...} from 'hormone.js';

// 引入单独功能模块
import {...} from 'hormone.js/array';
import {...} from 'hormone.js/object';
import {...} from 'hormone.js/date';
import {...} from 'hormone.js/string';
import {...} from 'hormone.js/type';
import {...} from 'hormone.js/operation';
```
##### 数组
```js
// 01. 数组分块
chunk([1, 2, 3, 4]); // [[1], [2], [3], [4]]
chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // [[1, 2, 3], [4]]
chunk([1, 2, 3, 4], 4); // [[1, 2, 3, 4]]
chunk([1, 2, 3, 4], 5); // [[1, 2, 3, 4]]

// 02. 数组去杂质：不能去掉 [], {}
filtrate([1, 0, false, '', 'e' * 23, NaN, null, undefined]); // [1]

// 03. 数组去杂质：能去掉 [], {}
impurityClean([1, false, null, undefined, '', {}, []]); // [1]

// 04. 计数数组中某个值的出现次数
countOccurrences(['a', 'a', 'b', 'c'], 'a'); // 2
countOccurrences(['a', 'a', 'b', 'c'], r => r === 'a'); // 2
countOccurrences([{name: 'a'}, {name: 'a'}, {name: 'b'}, {name: 'c'}], r => r.name === 'a'); // 2
countOccurrences([[1, 2], [1, 3], [1, 3, 4], [5, 6]], r => r.includes(1)); // 3

// 05. 深度平铺数组
flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4];

// 06. 数组差集
difference([1, 2, 3], [1, 2, 4]); // [3, 4]

// 07. 数组交集
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

// 08. 数组合集
union([1, 2, 3], [1, 4, 5]); // [1, 2, 3, 4, 5]

// 09. 数组去重
uniq([1, 1, 2, 3]); // [1, 2, 3]

// 10. 删除数组中的元素
drop([1, 2, 3, 4], n => n >= 3); // [3, 4]

// 11. 从右开始删除数组元素
dropRight([1, 2, 3, 4], 2); // [1, 2]

// 12. 删除数组中指定的值
pull(['a', 'b', 'c'], 'a', 'b'); // ['c']

// 13. 移除数组中的元素
remove([1, 2, 3, 4], n => n % 2 == 0); // [2, 4]

// 14. 返回数组中N个最大元素
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3, 2]

// 15. 返回数组中N个最小元素
minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1, 2]

// 16. 获取数组最大值
max([1, 2, 3]); // [3]

// 17. 获取数组最小值
min([1, 2, 3]); // [1]

// 18. 数组取样，随机获取数组中的一个元素
sample([3, 7, 9, 11]); // 9

// 19. 从数组中随机获取 n 个元素
sampleSize([1, 2, 3], 2); // [3, 1]
sampleSize([1, 2, 3], 4); // [2, 3, 1]

// 20. 数组排序(采用冒泡法实现数组排序)
sort([2, 1, 3]); // [1, 2, 3]

// 21. 初始化特定范围的数字数组
range(5); // [0, 1, 2, 3, 4, 5]
range(7, 3); // [3, 4, 5, 6, 7]
range(9, 0, 2); // [0, 2, 4, 6, 8]

// 22. 初始化特定范围和值的数组
rangeIdentical(5, 2); // [2, 2, 2, 2, 2]
```
##### 日期
```js
// 01. 明天
tomorrow(); // '2021-07-17'
tomorrow('2020-05-20'); // '2020-05-21'

// 02. 昨天
yesterday(); // '2021-07-16'
yesterday('2020-05-20'); // '2020-05-19'

// 03. 今天
toDay(); // '2021-07-17'
toDay('2020-05-20'); // '2020-05-20'

// 04. 日期格式化
format('2021/7/16', 'YYYY-MM-DD'); // 2021-07-16
format('2021/7/16', 'YYYY'); // 2021
format('2021/7/16', 'YYYY-MM'); // 2021-07
format('2021/7/16', 'M'); // 7
format('2021/7/16', 'D'); // 16
format(new Date(), 'YYYY-MM-DD hh:mm:ss') // 2021-07-16 12:30:30
format(null, 'YYYY'); // 2021 -> 最新年份
format(null, 'YYYY-MM'); // 2021-07 -> 最新月份
const s = Format('2021/7/16');
console.log(new Date(s).getMonth() + 1); // 7

// 05. 获取两个日期之间相差的天数
differDays('2021-07-16', '2021-07-06'); // 10
differDays(new Date(), '2021-07-06'); // 10
differDays('2021-07-06', new Date()); // 10
differDays(); // 0

// 06. 日期对比
compare('2021-07-16', '2021-07-10'); // true
compare(new Date(), '2021-07-10'); // true

// 07. 日期相减
subtract('2021-07-16', 'Y', 1); // 2020-07-16
subtract('2021-07-16', 'Q', 1); // 2021-04-16
subtract('2021-07-16', 'M', 1); // 2021-06-16
subtract('2021-07-16', 'W', 1); // 2021-07-09
subtract('2021-07-16', 'D', 1); // 2021-07-15
subtract('2021-07-16 10:30:00', 'h', 2); // 2021-07-16 08:30:00
subtract('2021-07-16 10:30:00', 'm', 2); // 2021-07-16 10:28:00
subtract('2021-07-16 10:30:00', 's', 2); // 2021-07-16 10:29:58

// 08. 日期相加
addition('2021-07-16', 'Y', 1); // 2022-07-16
addition('2021-07-16', 'Q', 1); // 2021-10-16
addition('2021-07-16', 'M', 1); // 2021-08-16
addition('2021-07-16', 'W', 1); // 2021-07-29
addition('2021-07-16', 'D', 1); // 2021-07-17
addition('2021-07-16 10:30:00', 'h', 2); // 2021-07-16 12:30:00
addition('2021-07-16 10:30:00', 'm', 2); // 2021-07-16 10:32:00
addition('2021-07-16 10:30:00', 's', 2); // 2021-07-16 10:30:02

// 09. 获取两个日期之间时间 - 结果已数组形式返回
differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']
differArray(new Date(), '2021-07-10'); // ['2021-07-10', ..., '2021-07-16']
differArray(new Date(), new Date()); // ['2021-07-16']
differArray(new Date()); // ['2021-07-16', ..., '2021-07-31']
differArray(new Date(), null); // ['2021-07-16', ..., '2021-07-31']
differArray(null, new Date()); // ['2021-07-01', ..., '2021-07-16']
differArray(); // ['2021-07-01', ..., '2021-07-31']
differArray('2020-05-20', new Date('2020-05-25')); // ['2020-05-20', ..., '2020-05-25']

// 10. 时长转换
secToTime(120); // '00:02:00'
secToTime(120, false) // '02:00'

// 11. 时间戳
timeStamp('2021-07-16', false); // 1626427461763 -> 时间戳以毫秒的形式
timeStamp('2021-07-16'); // 1626427453 -> 时间戳以秒的形式
timeStamp(null); // 1626926075
timeStamp(null, false); // 1626926088060
timeStamp(new Date(), false); // 1626926182676
timeStamp(new Date()); // 1626926231

// 12. 获取月份的第一天与最后一天
firstLastDays(); // [2021-07-01, 2021-07-31]
firstLastDays(new Date()); // [2021-07-01, 2021-07-31]
firstLastDays('2021-05-20'); // [2021-05-01, 2021-05-31]
firstLastDays('2021-05'); // [2021-05-01, 2021-05-31]
firstLastDays('2021'); // [2021-01-01, 2021-01-31]

// 13. 获取星期几
getWeek(); // 星期二
getWeek(null, ''); // 星期二
getWeek(null, '周'); // 周二
getWeek(new Date(), '星期'); // 星期二
getWeek(new Date(), '周'); // 周二
getWeek(new Date(), '礼拜'); // 礼拜二
getWeek('2020-05-20'); // 星期三

// 14. 获取日期和周
getDateWeeks({start: '2021-07-01', end: '2021-07-05'}); // [{date: '2021-07-01', week: '星期四'}, {date: '2021-07-02', week: '星期五'}, ...]
getDateWeeks({start: '2021-07-01', end: '2021-07-05', type: '周'}); // [{date: '2021-07-01', week: '周四'}, {date: '2021-07-02', week: '周五'}, ...]
getDateWeeks({date: '2021-07'}); // [{date: '2021-07-01', week: '星期四'}, ...]
getDateWeeks({start: '2021-07-01', end: '2021-07-05', date: '2021-07'}); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-05', week: '星期一'}]
getDateWeeks(); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-31', week: '星期六'}]
getDateWeeks(null); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-31', week: '星期六'}]
getDateWeeks({end: '2021-07-05', date: '2021-07'}); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-05', week: '星期一'}]
getDateWeeks({end: '2021-07-05'}); // [{date: '2021-07-01', week: '星期四'}, ..., {date: '2021-07-05', week: '星期一'}]
getDateWeeks({start: '2021-07-21', date: '2021-07'}); // [{date: '2021-07-21', week: '星期三'}, ..., {date: '2021-07-31', week: '星期六'}]
getDateWeeks({start: '2021-07-21'}); // [{date: '2021-07-21', week: '星期三'}, ..., {date: '2021-07-31', week: '星期六'}]
getDateWeeks({start: new Date(), type: '周'}); // [{date: '2021-07-22', week: '周四'}, ..., {date: '2021-07-31', week: '周六'}]
getDateWeeks({type: '周'}); // [{date: '2021-07-01', week: '周四'}, ..., {date: '2021-07-31', week: '周六'}]

// 15. 根据年份和月份获取当月有几周
getWeekCycle({type: '周', date: '2021-07'});
// [
  {key: 1, text: '第一周', start: '2021-07-01', end: '2021-07-04', data: [{date: '2021-07-01', week: '周四'}, ..., {date: '2021-07-04', week: '周日'}]},
  {key: 2, text: '第二周', start: '2021-07-05', end: '2021-07-11', data: [{date: '2021-07-05', week: '周一'}, ..., {date: '2021-07-11', week: '周日'}]},
  {key: 3, text: '第三周', start: '2021-07-12', end: '2021-07-18', data: [{date: '2021-07-12', week: '周一'}, ..., {date: '2021-07-18', week: '周日'}]},
  {key: 4, text: '第四周', start: '2021-07-19', end: '2021-07-25', data: [{date: '2021-07-19', week: '周一'}, ..., {date: '2021-07-25', week: '周日'}]},
  {key: 5, text: '第五周', start: '2021-07-26', end: '2021-07-31', data: [{date: '2021-07-26', week: '周一'}, ..., {date: '2021-07-31', week: '周六'}]}
]

// 16. 时间分段
sections({num: 6});                            // ["04:00", "08:00", "12:00", "16:00", "20:00", "00:00"]
sections({num: 6, hours: 1});                  // ["05:00", "09:00", "13:00", "17:00", "21:00", "01:00"]
sections({num: 6, min: 30});                   // ["04:30", "08:30", "12:30", "16:30", "20:30", "00:30"]
sections({num: 6, min: 30, form: 'hh:mm:ss'}); // ["04:30:00", "08:30:00", "12:30:00", "16:30:00", "20:30:00", "00:30:00"]
sections({num: 6, sec: 45, form: 'hh:mm:ss'}); // ["04:00:45", "08:00:45", "12:00:45", "16:00:45", "20:00:45", "00:00:45"]
```
##### 对象
```js
// 01. 反转对象的键值对
reversal({ name: 'John', age: 20 }); // { 20: 'age', John: 'name' }

// 02. 对象键统一小驼峰化
camelizeKeys({Name: 'hormone', 'a-b': true, attr_one: 'foo'}); // {name: 'hormone', aB: true, attrOne: 'foo'}
camelizeKeys([{attr_one: 'foo'}, {attr_one: 'bar'}]); // [{ attrOne: 'foo' }, { attrOne: 'bar' }]
```
##### 字符串
```js
// 01. 遮蔽字符串
mask('18883141271'); // '******1271'
mask('18883141271', 3); // '*******271'
mask('18883141271', 3, '$'); // '$$$$$$$$271'

// 02. 将字符串转换为单词数组
words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]

// 03. 字符串小驼峰转化
camelize('Hormone.js'); // 'hormone.js'
camelize('hello_world'); // 'helloWorld'
camelize('hello_world-foo bar'); // 'helloWorldFooBar'

// 04. 将大小写字符串转换为下划线分隔的字符串
decamelize('helloWorldFooBar'); // 'hello_world_foo_bar'
decamelize('helloWorldFooBar', { separator: '-' }); // 'hello-world-foo-bar'
decamelize('helloWorld1', { split: /(?=[A-Z0-9])/ }); // 'hello_world_1'

// 05. 类似于 camelize（string）,但也确保第一个字符是大写的
pascalize('hello_world-foo bar'); // 'HelloWorldFooBar'
```
##### 类型
```js
// 01. 获取原生类型的值
getType(new Set([1, 2, 3])); // 'set'
getType(new Map()); // 'map'
getType(Promise); // 'function'
getType(new Promise((resolve, reject) => resolve())); // 'promise'
getType([]); // 'array'
getType(false); // 'boolean'
getType(1); // 'number'
getType(null); // null
getType(''); // 'string'
getType(); // 'undefined'
getType(undefined); // 'undefined'
getType(Symbol('x')); // 'symbol'

// 02. 类型检查
typeCheck('1'); // String
typeCheck({}); // Object
typeCheck(2); // Number
typeCheck([]); // Array
typeCheck(function f() {}); // Function
typeCheck(null); // Null
typeCheck(true); // Boolean
typeCheck(new Date()); // Date
typeCheck(symbol('x')); // Symbol
let a; typeCheck(a); // Undefined

// 03. 检查空
checkEmpty('' | [] | null | {} | undefined | 0); // true

// 04. 是否为数组
isArray([1]); // true

// 05. 是否为布尔
isBoolean(null); // false
isBoolean(false); // true

// 06. 是否为symbol
isSymbol(Symbol('x')); // true

// 07. 是否为字符串
isString('a'); // true

// 08. 是否为字对象
isObject({}); // true
isObject([]); // false

// 09. 是否为 number
isNumber(1); // true

// 10. 是否为 function
isFunction(function() {}); // true

// 11. 是否为 null
isNull(null); // true

// 12. 是否为 undefined
isUndefined(undefined) // true

// 13. 是否为 date
isDate(new Date()) // true

// 14. 是否为有效的JSON
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(''); // false
```
##### 其他
```js
// 01. 深拷贝
const a = [1, 2, 3];
const b = clone(a);
a[0] = 6;
console.log('a', a); // [6, 2, 3]
console.log('b', b); // [1, 2, 3]

// 02. 随机获取颜色
getRandomColor(); // '#049543'

// 03. 生成指定范围内的颜色
getRangeColors(); // [{key: 0, color: '#c4192e'}, {key: 1, color: '#370665'}]
getRangeColors(null); // [{key: 0, color: '#c4192e'}, {key: 1, color: '#370665'}]
getRangeColors(0); // [{key: 0, color: '#c4192e'}]
getRangeColors(-1); // [{key: 0, color: '#c4192e'}]
getRangeColors(100); // [{key: 0, color: '#c4192e'}, ..., {key: 99, color: '#10f168'}]

// 04. 中文大写货币
chineseCurrency(1) or chineseCurrency('1'); // '壹元整'
chineseCurrency('100.25'); // '壹佰元贰角伍分'
chineseCurrency('100000000'); // '壹亿元整'

// 05. 数字转中文数字或中文大写数字
toChinesNum({num: 1}); // '一'
toChinesNum({num: '1000000000000'}); // '一万亿'
toChinesNum({num: '999999999.99'}); // '九亿九千九百九十九万九千九百九十九点九九'
toChinesNum({num: '999999999.99', capitalize: true}); // '玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖点玖玖'
toChinesNum({num: '125'}); // '一百二十五'
toChinesNum({num: '-125'}); // '负一百二十五'
toChinesNum({num: '125.25'}); // '一百二十五点二五'
toChinesNum({num: '125.25', capitalize: true}); // '壹佰贰拾伍点贰伍'
toChinesNum({num: '125.255', capitalize: true}); // '壹佰贰拾伍点贰伍伍'
toChinesNum({num: '-125.255', capitalize: true, digits: 3}); // '负壹佰贰拾伍点贰伍伍'
toChinesNum({num: '-125.255', capitalize: true, digits: 3, suf: '元'}); // '负壹佰贰拾伍点贰伍伍元'
```
#### 说明
  我会一直努力更新和完善hormone.js这个简单而实用的 js 工具库，谢谢大家的支持和喜欢。
#### 作者
  leehormone@yeah.net
#### [回到顶部](#readme)

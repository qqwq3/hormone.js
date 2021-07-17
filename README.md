#### 一个简单又实用的 JavaScript 工具库
```js
npm install hormone.js -S
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
```
##### 数组
```js
// 01. 数组分块
chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]

// 02. 数组去杂质：不能去掉 [], {}
compact([1, 0, false, '', 'e' * 23, NaN, null, undefined]); // [1]

// 03. 数组去杂质：能去掉 [], {}
impurityClean([1, false, null, undefined, '', {}, []]); // [1]

// 04. 计数数组中某个值的出现次数
countOccurrences(['a', 'a', 'b', 'c'], 'a'); // 2

// 05. 深度平铺数组
flatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4];

// 06. 数组差集
difference([1, 2, 3], [1, 2, 4]); // [3, 4]

// 07. 数组交集
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]

// 08. 数组合集
union([1, 2, 3], [1, 4, 5]]); // [1, 2, 3, 4, 5]

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
tomorrow('2020-05-20'); '2020-05-21'

// 02. 昨天
yesterday(); // '2021-07-16'
yesterday('2020-05-20'); // '2020-05-19'

// 03. 今天
toDay(); // '2021-07-17'
toDay('2020-05-20'); '2020-05-20'

// 04. 日期格式化
format('2021/7/16'); // 2021-07-16
format('2021/7/16', 'YYYY-MM-DD'); // 2021-07-16
format(new Date(), 'YYYY-MM-DD hh:mm:ss') // 2021-07-16 12:30:30

// 05. 获取两个日期之间相差的天数
differDays('2021-07-16', '2021-07-06'); // 10

// 06. 日期对比
compare('2021-07-16', '2021-07-10'); // true

// 07. 日期相减
subtract('2021-07-16', 'Y', 1); // 2020-07-16
subtract('2021-07-16', 'M', 1); // 2021-06-16
subtract('2021-07-16', 'D', 1); // 2021-07-15

// 08. 日期相加
addition('2021-07-16', 'Y', 1); // 2022-07-16
addition('2021-07-16', 'M', 1); // 2021-08-16
addition('2021-07-16', 'D', 1); // 2021-07-17

// 09. 获取两个日期之间时间 - 结果已数组形式返回
differArray('2021-07-16', '2021-07-18'); // ['2021-07-16', '2021-07-17', '2021-07-18']

// 10. 时长转换
secToTime(120); // '00:02:00'
secToTime(120, false) // '02:00'

// 11. 时间戳
timeStamp('2021-07-16'); // 1626427453 - 时间戳以秒的形式
timeStamp('2021-07-16', false); // 1626427461763 - 时间戳以毫秒的形式
```
##### 对象
```js
// 01. 反转对象的键值对
reversal({ name: 'John', age: 20 }); // { 20: 'age', John: 'name' }
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
```
##### 类型
```js
// 01. 获取原生类型的值
getType(new Set([1, 2, 3])); // 'set'

// 02. 类型检查
typeCheck('1'); // String
typeCheck([]); // Array

// 03. 检查空
checkEmpty('' | [] | null | {} | undefined); // true

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
```
#### 说明
  我会一直更新和完善hormone.js这个简单而实用的 js 工具库
#### 作者
  leehormone@yeah.net
#### [回到顶部](#readme)

/**
 * name: 生成指定范围内的颜色
 * describe: 以数组的形式返回
 * example: getRangeColors(); // [{key: 0, color: '#c4192e'}, {key: 1, color: '#370665'}]
 *          getRangeColors(null); // [{key: 0, color: '#c4192e'}, {key: 1, color: '#370665'}]
 *          getRangeColors(0); // [{key: 0, color: '#c4192e'}]
 *          getRangeColors(-1); // [{key: 0, color: '#c4192e'}]
 *          getRangeColors(100); // [{key: 0, color: '#c4192e'}, ..., {key: 99, color: '#10f168'}]
 * args: values
 * */
declare const GetRangeColors: (values: number) => any[];
export default GetRangeColors;

/**
 * name: 获取星期几
 * example: getWeek(); // 星期二
 *          getWeek(null, ''); // 星期二
 *          getWeek(null, '周'); // 周二
 *          getWeek(new Date(), '星期'); // 星期二
 *          getWeek(new Date(), '周'); // 周二
 *          getWeek(new Date(), '礼拜'); // 礼拜二
 *          getWeek('2020-05-20'); // 星期三
 * args: date = <>, str = <'星期', '周', '礼拜'>
 * */
declare const GetWeek: (date?: any, str?: string) => string;
export default GetWeek;

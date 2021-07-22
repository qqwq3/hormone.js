/**
 * name: 日期对比
 * example: compare('2021-07-16', '2021-07-10'); // true
 *          compare(new Date(), '2021-07-10'); // true
 * args: newData -> 当天时间, oldDate -> 历史时间
 * */
declare const Compare: (newDate: any, oldDate: any) => boolean | any;
export default Compare;

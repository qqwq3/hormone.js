/**
 * name: 时间戳
 * example: timeStamp('2021-07-16', false); // 1626427461763 - 时间戳以毫秒的形式
 *          timeStamp('2021-07-16'); // 1626427453 - 时间戳以秒的形式
 * args: convert -> 是否以秒的形式, date -> 时间：2021-07-16
 * */
declare const TimeStamp: (date: string, convert?: boolean) => string | number | any;
export default TimeStamp;

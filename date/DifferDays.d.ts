/**
 * name: 获取两个日期之间相差的天数
 * example: differDays('2021-07-16', '2021-07-06'); // 10
 *          differDays(new Date(), '2021-07-06'); // 10
 *          differDays('2021-07-06', new Date()); // 10
 *          differDays(); // 0
 * args: dateInitial, dateFinal
 * */
declare const DifferDays: (dateInitial: any, dateFinal: any) => number | string;
export default DifferDays;

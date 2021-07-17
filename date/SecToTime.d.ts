/**
 * name: 时长转换
 * describe: 把秒数转换为 00:00 or 00:00:00 格式
 * example: secToTime(120); // '00:02:00'
 *          secToTime(120, false) // '02:00'
 * args: value -> 时长值，status
 * */
declare const SecToTime: (value?: number, status?: boolean) => string | any;
export default SecToTime;

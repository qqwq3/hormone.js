/**
 * name: 获取两个日期之间相差的天数
 * example: differDays('2021-07-16', '2021-07-06'); // 10
 * args: dateInitial, dateFinal
 * */
import Format from "./Format";
// @ts-ignore
const DifferDays = (dateInitial, dateFinal) => Math.abs((new Date(Format(dateFinal)) - new Date(Format(dateInitial))) / (1000 * 3600 * 24));
export default DifferDays;

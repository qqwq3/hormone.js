/**
 * name: 时长转换
 * describe: 把秒数转换为 00:00 or 00:00:00 格式
 * example: secToTime(120); // '00:02:00'
 *          secToTime(120, false) // '02:00'
 * args: value -> 时长值，status
 * */
const SecToTime = (value: number = 0, status: boolean = true) => {
  let t = '';
  const hour = Math.floor(value / 3600);
  const min = Math.floor((value / 60) % 60);
  const sec = value % 60;
  if (status) {t = hour < 10 ? ('0' + hour + ':') : (hour + ':')}
  if (min < 10) {t += '0';}
  t += (min + ':');
  if (sec < 10) {t += '0';}
  t += sec.toFixed(0);
  return t;
};
export default SecToTime;

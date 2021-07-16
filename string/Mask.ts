/**
 * name: 遮蔽字符串
 * example: mask('18883141271'); // '******1271'
 *          mask('18883141271', 3); // '*******271'
 *          mask('18883141271', 3, '$'); // '$$$$$$$$271'
 * args: cc -> 参数值, num -> 显示几位，mask -> 代替符
 * */
const Mask = (cc, num = 4, mask = '*') => ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);
export default Mask;

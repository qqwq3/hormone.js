/**
 * name: 中文大写货币
 * example: chineseCurrency(1) or chineseCurrency('1'); // '壹元整'
 *          chineseCurrency('100.25'); // '壹佰元贰角伍分'
 *          chineseCurrency('100000000'); // '壹亿元整'
 * args: value
 * */
declare const ChineseCurrency: (value?: string | number | undefined) => string | any;
export default ChineseCurrency;

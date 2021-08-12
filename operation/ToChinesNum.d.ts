/**
 * name: 数字转中文数字或中文大写数字
 * example: toChinesNum({num: 1}); // '一'
 *          toChinesNum({num: '1000000000000'}); // '一万亿'
 *          toChinesNum({num: '999999999.99'}); // '九亿九千九百九十九万九千九百九十九点九九'
 *          toChinesNum({num: '999999999.99', capitalize: true}); // '玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖点玖玖'
 *          toChinesNum({num: '125'}); // '一百二十五'
 *          toChinesNum({num: '-125'}); // '负一百二十五'
 *          toChinesNum({num: '125.25'}); // '一百二十五点二五'
 *          toChinesNum({num: '125.25', capitalize: true}); // '壹佰贰拾伍点贰伍'
 *          toChinesNum({num: '125.255', capitalize: true}); // '壹佰贰拾伍点贰伍伍'
 *          toChinesNum({num: '-125.255', capitalize: true, digits: 3}); // '负壹佰贰拾伍点贰伍伍'
 *          toChinesNum({num: '-125.255', capitalize: true, digits: 3, suf: '元'}); // '负壹佰贰拾伍点贰伍伍元'
 * args: num, capitalize, suf, digits
 * */
interface Props {
    num: any;
    capitalize?: boolean;
    suf?: string;
    digits?: number;
}
declare const ToChinesNum: ({ num, capitalize, suf, digits }: Props) => any;
export default ToChinesNum;

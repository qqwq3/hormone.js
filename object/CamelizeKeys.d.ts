/**
 * name: 对象键统一小驼峰化
 * example: camelizeKeys({Name: 'hormone', 'a-b': true, attr_one: 'foo'}); // {name: 'hormone', aB: true, attrOne: 'foo'}
 *          camelizeKeys([{attr_one: 'foo'}, {attr_one: 'bar'}]); // [{ attrOne: 'foo' }, { attrOne: 'bar' }]
 * args: obj
 * */
declare const CamelizeKeys: (obj: any) => any;
export default CamelizeKeys;

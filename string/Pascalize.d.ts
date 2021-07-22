/**
 * name: 类似于 camelize（string）,但也确保第一个字符是大写的
 * example: pascalize('hello_world-foo bar'); // 'HelloWorldFooBar'
 * args: str
 * */
declare const Pascalize: (str: string) => string;
export default Pascalize;

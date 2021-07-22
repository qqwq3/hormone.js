/**
 * name: 将大小写字符串转换为下划线分隔的字符串
 * example: decamelize('helloWorldFooBar'); // 'hello_world_foo_bar'
 *          decamelize('helloWorldFooBar', { separator: '-' }); // 'hello-world-foo-bar'
 *          decamelize('helloWorld1', { split: /(?=[A-Z0-9])/ }); // 'hello_world_1'
 * args: str, options
 * */
declare const Decamelize: (str: string, options?: any) => string;
export default Decamelize;

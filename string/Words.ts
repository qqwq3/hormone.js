/**
 * name: 将字符串转换为单词数组
 * example: words('I love javaScript!!'); // ["I", "love", "javaScript"]
 *          words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
 * args: str, pattern
 * */
const Words = (str: string, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
export default Words;

/**
 * ^起始位置
 * $结尾位置
 * [] 数组中的值 或 意思 [a,b,c]
 * [-] 链接符 [a-z] 26字母任何一个都是true
 * [^] 表示里面内容取反
 *  量词区
 * * 相当于 >=0 可以出现的次数 /^a*$/
 * + 大于0次
 * ? 1次或者0次
 * {3} 指定重复3次
 * {3,16} 大于等于三次 且 小于等于16次
 * () 优先级更高  /(abc){2}/  abcabc
 * 预定义类
 * \d => [0-9] \D=>[^0-9] 取反
 * \w => [a-zA-z0-9_] \W取反
 * \s 匹配空格换行符制表符空格符等 [\r\n\v\f] \S非空格字符
 * | 或的意思
 * & 同的意思
 * g 全局匹配
 * i 忽略大小写
 */

var reg = new RegExp(/123/);
console.dir(reg);
let strReg = /^123/;
let reg1 = /^abc$/; // 必须是abc字符串
let reg2 = /^[a-z,A-Z]$/;
// console.log(strReg.test("1123"));
// console.log(reg2.test("Aa"));
//字符组合 大写和小写开头
let reg3 = /[a-zA-Z0-9]{3-6}$/;
// console.log(reg3.test("wang"));

console.log("正则表达式常用事例讲解");
//简单类型
// return true; 匹配整字符串，辅助理解为 a === b
console.log("NO.1", /iautos.cn/.test("iautos.cn"));
// return true; .cn中的单个字符匹配是否在[]中出现，辅助理解为array.indexOf("char");
console.log("NO.2", /[iautos.cn]/.test(".cn"));

// return false; 单个字符与整字符串的组合匹配，匹配内容在[]中出现0或1次，且含.cn
console.log("NO.3", /[iautos]+.cn/.test(".cn"));
// return null;	 含义同上，匹配成功返回数组，失败为null
console.log("NO.4", ".cn".match(/[iautos]+.cn/gi));
// return false; 匹配单个字符，等同于[^\n\r]
console.log("NO.5", /........../.test("iautos.cn"));
// return true; 匹配a-z字符数1-5，注意需要加首尾匹配符
console.log("NO.1", /^[a-z]{1,5}[0-9]{2}$/.test("iautos.cn"));

//负向类型
// return false; 匹配单个字符是否<不在>匹配项中 false说明在 true说明不在
console.log("NO.6", /[^iautos.cn]/.test(".cn"));

//范围类型
// return false; 匹配前两位为数字，中间至少一个字母，行尾匹配.com
console.log("NO.7", /^[0-9]{2}[a-z]+.com$/.test("99haoche.com"));

//特殊匹配类型
// return true; 匹配字符串首尾空白字符
console.log("NO.8", /^s*|s*$/.test("iautos.cn"));
// return false; 匹配中文字符
console.log("NO.9", /[\u4e00-\u9fa5]/.test("iautos.cn"));
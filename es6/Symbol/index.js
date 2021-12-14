let s = Symbol("wang");
//[object,object] symbol调用toString方法
//symbol 一种特殊字符串,不可修改
let s1 = Symbol({ name: "wang" });
// console.dir(s)
// console.dir(s1)
//console.log(s1==s) //false
// console.log(s1.description); // 'wang'

//for 全局只会生成一个
let f1 = Symbol.for("foo");
let f2 = Symbol.for("foo");
console.log(f1 === f2); //true

const stu1 = Symbol("张三");
const stu2 = Symbol("张三");
let grade = {
  [stu1]: { address: "yyy", tel: "155" },
  [stu2]: { address: "xxxx", tel: "188" }
};
console.log(grade);
console.log(grade[stu2]);

const sym = Symbol("imooc");

class User {
  constructor(name) {
    this.name = name;
    this[sym] = "imooc.com";
  }

  sayName() {
    return this.name + this[sym];
  }
}

const user = new User("王猛");
console.log(user.sayName());
//取不到symbol
for (const k in user) {
  console.log(k);
}
//取symbol
for (const k of Object.getOwnPropertySymbols(user)) {
  console.log(k);
}
//两者都可以取到
for (const v of Reflect.ownKeys(user)) {
  console.log(v);
}

//案例
// let enumData = {
//   up: "UP",
//   dq: "DQ"
// }
let list = [
  { label: "王", value: "1" },
  { label: "张", value: "2" },
  { label: "李", value: "3" }
];
let enumData = {
  up: Symbol(),
  dq: Symbol()
};

function resolution(file) {
  if (file === enumData.up) {
    return "行业";
  }
  if (file === enumData.dq) {
    return "模式";
  }
}

console.log(resolution(enumData.dq));


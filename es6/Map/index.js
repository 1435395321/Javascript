// 对象形式
let m = new Map();
let obj = {
  name: "imooc",
};
// set增改 delete删 get获取 has是否
m.set(obj, "es");
// console.log(m);
let getM = m.get(obj);
// console.log(getM);

// 数组形式

let mArr = new Map([
  ["name", "imooc", "dddd", "ffff"],
  ["age", "15"],
]);
console.log(mArr);

// 循环
// mArr.forEach((item, index) => {
//   console.log(item, index);
// });
// for (const [key, val] of mArr.entries()) {
//   console.log(key, val);
// }
// console.log(typeof mArr);
// for (let i = 0; i < mArr.size; i++) {
//   console.log(mArr[i]);
// }
// WeakMap key只能引用数据类型  obj fun arr 不支持遍历 没有clier方法 弱引用
let wm = new WeakMap();
let ele = document.querySelector("#div");
wm.set(ele, "这是一个div标签");
console.log(wm.get(ele));

//Set  成员都是唯一的
let s = new Set([1, 2, 3, 3]);
s.add("18").add(18);
s.delete(3);
// console.log(s.has("18"));
// console.log(s);
//遍历
for (const k of s.entries()) {
  // console.log(k);
}

//场景
let arr = [1, 2, 3, 456, 98, 12, 45, 1, 3];
let arr1 = [1, 2, 3, 45, 1, 3];
let newArr = new Set(arr);
newArr = Array.from(newArr);
let newArr1 = [...newArr];
// console.log(newArr);
// console.log(newArr1);

let a = [2, 3, 1, 5, 48, 1, 2, 3];
let b = [15, 1, 21, 54, 12, 1, 31, 5, 12, 2];
let s1 = new Set(a);
// let s2 = new Set(b)
let res = new Set(b.filter((item) => s1.has(item)));
let res1 = new Set(b.filter((item) => !s1.has(item)));
console.log("交集", res);
console.log("差集", res1);

// weakSet 对象
let ws = new WeakSet();
const obj = {
  name: "imooc",
};
const obj1 = {
  age: 5,
};

ws.add(obj);
ws.add(obj1);
ws.has(obj1);
obj1.age = 255;
console.log();
// 不可遍历 弱引用

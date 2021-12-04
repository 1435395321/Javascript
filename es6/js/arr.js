// 数组的拓展
// 类数组伪数组
let divs = document.getElementsByTagName("div");
// console.log(divs); //HTMLCollectoion
let divs2 = document.getElementsByClassName(".xx");
let divs3 = document.querySelectorAll(".xx"); //NodeLiist
// console.log(divs2, divs3);

let o = {
  name: "ldh",
  age: 18,
};
function handler(a, b) {
  console.log(this);
  console.log(a + b);
}
handler.call(o, o.name, o.age);

function Father(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

function Children(name, age, sex) {
  Father.call(this, name, age, sex);
}

let newChild = new Children("ldex", "13", "男");
console.log(newChild);

function fn(params, cc) {
  console.log(this);
  console.log(params, cc);
}
fn.apply(o, ["pink", "disk"]);

let arrMax = [1, 5, 8, 64, 1, 3, 135, 22, 13];
let newMax = Math.max.apply(Math, arrMax);
console.dir(newMax);

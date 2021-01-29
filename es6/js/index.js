const move = ({ a, b = 0 } = {}) => [a, b];
// console.log(move({ a: 3 })); // [3, 8]
// 返回一个数组

// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();

// 返回一个对象

// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let { foo, bar } = example();
// console.log(foo,bar);
// let map = new Map();
// map.set("first", "hello");
// map.set("second", "world");
// map.set("姓名", "王 小");
// for (let [key,val] of map){
//     console.log(key,val);
// }
// map.forEach((value, key) => {
//     console.log(key, value);
// });

//字符串拓展
// let name = "hello World!"
// let city = "1420105400";
// for (let i of name) {
//     console.log([i]);
// }
// includes()：返回布尔值，表示是否找到了参数字符串。

// endsWith
// padStart()，padEnd()
// let a = name.includes('e')
// console.log(a);
// let a1 =  city.endsWith('0');
// let newCity = ''
// for (let i of city){
//     if(i.endsWith('0')===false){
//         newCity = i;
//     }
// }
// // console.log(newCity);
// // console.log(name.repeat(5));
// console.log(name.padStart(20, 'ab'));
let div = document.querySelector("#result");
// div.append(
//     'There are <b>' + basket.count + '</b> ' +
//     'items in your basket, ' +
//     '<em>' + basket.onSale +
//     '</em> are on sale!'
// );
let x = 1;
let y = 2;
const data = [
    { first: "<Jane>", last: "Bond" },
    { first: "Lars", last: "<Croft>" },
];
const tmpl = addrs => `
  <table>   
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join("")}
  </table>
`;
div.innerHTML = `${x} + ${y} = ${x + y}`;
div.innerHTML = `${x} + ${y * 2} = ${x + y * 2}`;
div.innerHTML = `${tmpl(data)} + ${y * 2} = ${x + y * 2}`;
// "1 + 2 = 3"
let a = 5;
let b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
    return "ok";
}

// tag`Hello ${a + b} world ${a * b} world123`;

function tag1(num = "123") {
    // console.log(num);
}

const ww = tag1`1`;
//数值
// parseInt(), parseFloat()
// .isInteger()用来判断一个值是否为整数。
// Math.trunc()方法用于去除一个数的小数部分，返回整数部分。对于非数值，Math.trunc内部使用Number方法将其先转为数值。
// Math.sign方法用来判断一个数到底是正数、负数、还是零。正+1 负-1 零 0
const num = 5.7;
// console.log(Math.trunc(num));
Math.sign(-5); // -1
// console.log(Math.cbrt(27));

//数组
// Array.from()转换数组  还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
// Array.of方法用于将一组值，转换为数组。 总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
// copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
// find 用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员
// fill方法使用给定值，填充一个数组。
// entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象
// includes()方法返回一个布尔值，表示某个数组是否包含给定的值，
let arrayLike = {
    "0": "a",
    "1": "b",
    "2": "c",
    length: 3
};
// let arr = Array.from({length:5})

// console.log(arrayLike);
const arr = Array.from(arrayLike, (x, v) => {
    if (v === 1) {
        return x + 3;
    }
    return x;
});
// console.log(arr);

Array.from({ length: 2 }, () => "jack");
// ['jack', 'jack']
let of = Array.of(1, 11, 8, 9, 9, 44, 25);
// [3, 11, 8]
let newof = of.copyWithin(5, 1, 2);
// [1, 4, -5, 10].find((n) => n < 0)
// console.log(newof);
let a1 = ["a", "b", "c"].fill(7, 1, 8);
// console.log(a1);
let arranger = ["a", "b", "c", "d", "e", "f"];
for (let index of arranger) {
    // console.log(index);
}
let arrIncludes = [1, 2, 3].includes(2, 1);
// console.log(arrIncludes);

//函数拓展
function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    // console.log(x*y);
}

let p = new Point(3, 5);

//解构
function foo({ x, y = 5 }) {
    console.log(x, y);
}

// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
function request(url, { method = "Get", header = {}, body = "" }) {
    console.log(method, url, header);
}

// request("api/admin", { method: "012", header: { a: "my" } });

function fetch(url, { method = "GET" } = {}) {
    console.log(method);
}

// fetch("/example.com", { method: "post" });

// let foo1 = 'outer';
//
// function bar(x=foo1) {
//     let foo1 = 'inner'; //没走这里
//     console.log(x); // outer
// }
// function bar(func = () => foo1) {
//     let foo1 = 'inner';
//     console.log(func());
// }
// bar();

// var c = 1;
function foo2(c, y = function () {
    c = 2;
}) {
    var c = 20;
    y();
    console.log(c);
}

// foo2()//20
function add(...value) {
    let sum = 0;
    for (let num of value) {
        sum += num;
    }
    return sum;
}

let addNum = add(1, 2, 3, 5);

// console.log(addNum);
function pushe(arr, ...items) {
    items.forEach(item => {
        arr.push(item);

    });
    console.log(arr);
}

let a11 = [];
// pushe(a11,2,3,4)
let map = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
]);
let arrMap = [...map.entries()];
console.log(arrMap);

function nice(num) {
    if (num === 1) {
        console.log("1*1=1");
    } else {
        nice(num-1)
        let str = "";
        for (let i = 1; i <= num; i++) {
            str += i + "*" + num + "=" + i * num+ ' ';
        }
        console.log(str);

    }
}

nice(9);
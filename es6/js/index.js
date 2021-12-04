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

// console.log(arrMap);

function nice(num) {
    if (num === 1) {
        console.log("1*1=1");
    } else {
        nice(num - 1);
        let str = "";
        for (let i = 1; i <= num; i++) {
            str += i + "*" + num + "=" + i * num + " ";
        }
        // console.log(str);
    }
}

// nice(9);

// /** 对象 **/
// Generator函数
// 函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。
// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象 /**/第一个参数是目标对象，后面的参数都是源对象。
// __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。
// Object.entries values,keys 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
// Object.getOwnPropertyDescriptor方法，返回某个对象属性的描述对象（descriptor）。
// Object.getOwnPropertyDescriptors 方法，返回指定对象所有自身属性（非继承属性）的描述对象。
let obj = {
    constructor(name) {
        this.name = name;
    },
    foo: true,

};
obj.foo = "zifu";
obj.foo = () => 1;
obj["a" + "bc"] = 123;
// console.log(obj.foo());
let person = {
    sayName() {
        // console.log(this.name);
    },
};
// console.log(person.sayName.name)
// const key1 = Symbol('description');
let key1 = Symbol("description");
// console.log(obj);
let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3 };
Object.assign(target, source1, source2);
// console.log(target);

let v1 = "abc";
let v2 = [1, 2, 5, 7];
let v3 = 10;

let obj1 = Object.assign({}, v1, v2, v3);
// console.log(obj1); // { "0": "a", "1": "b", "2": "c" }
// let { keys, values, entries } = Object;
let objEnt = { a: 1, b: 2, c: 3 };
// console.log(values);
for (let [k, v] of Object.entries(objEnt)) {
    // console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`); // 'a', 'b', 'c'
}
let objA = { a: { b: 1 } };
let { ...xA } = objA;
objA.a.b = 2;
parseInt()
// console.log(xA.a.b);// 2
let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let o3 = { ...o2 };
// console.log(o2);
// 扩展运算符可以用于合并两个对象。
let a111 = { A: 123 };
let b1 = { B: 456 };
let ab = { ...a111, ...b1 };
// console.log(ab);
let objC = { d: "c", p: "a", };

let ObjNew = Object.getOwnPropertyDescriptor(objC, "d");
// console.log(ObjNew);

let objD = {
    foo: 123,
    get bar() {
        return "abc";
    }
};
let objDD = Object.getOwnPropertyDescriptors(objD);
// console.log(objDD);

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

const cat = new Car("Eagle", "Talon TSi", 1993, 'rand');
// console.log(cat);

// ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型

let s = Symbol('a');
let objS = {
    toString() {
        return 'abc'
    }
}
// console.log(Symbol(objS));
let mySymbol = Symbol();
let aS = {
    [mySymbol]: 'Hello!'
};
// console.log(aS);
//强耦合
let shapeType = {
    triangle: Symbol()
}
function getArea(shape, options) {
    let area = 0;

    switch (shape) {
        case 'Triangle': // 魔术字符串
            area = .5 * options.width * options.height;
            break;
        /* ... more code ... */
    }
    console.log(area)
    return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 }); // 魔术字符串

let now = new Date();
console.log(now.year);
now.year = 2001; // 987617605170
console.log(now);

var o = { a: 0 }

Object.defineProperties(o, {
    "b": { get: function () { return this.a + 1; } },
    "c": { set: function (x) { this.a = x / 2; } }
});

o.c = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
// console.log(o.b) // Runs the getter, which yields a + 1 or 6


// Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截

// let objP = new Proxy({}, {
//     get: function (target, key, receiver) {
//         console.log(`getting ${key}!`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//         console.log(`setting ${key}!`);
//         return Reflect.set(target, key, value, receiver);
//     }
// });
let objP = new Object([1, 23, 53]);
// objP.count = 1
//  setting count!
// ++objP.count
console.log(objP)

// Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
let promise = new Promise(function (resolve, reject) {
    // ... some code
    let res = 200;
    if (res) {
        resolve(resolve);
    } else {
        reject(reject);
    }
});
// console.log(promise)
'use strict'
function test1() {
    console.log(this)
}
test1();












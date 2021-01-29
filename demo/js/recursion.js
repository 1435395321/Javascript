function fn(x) {
    if (x === 1) {
        return 1;
    }
    return x * fn(x - 1);
}

// console.log(fn(5))

function fb(n) {
    if (n === 1 || n === 2) return 1;
    return fb(n - 1) + fb(n - 2);
}

// console.log(fb(5));

let data = [{
    id: 1,
    name: "家电",
    goods: [
        {
            id: 11,
            "gname": "冰箱",
            goods: [{
                id: "111",
                "name": "美的"
            }, {
                id: "112",
                "name": "格力"
            }]
        },
        {
            id: 12,
            "gname": "洗衣机"
        }
    ]
}, {
    id: 2,
    name: "服装"
}];

const getId = (obj, id) => {
    let o = {};
    obj.forEach((item) => {
        if (item.id === id) {
            o = item;
        } else if (item.goods && item.goods.length > 0) {
            o = getId(item.goods, id);
        }
    });
    return o;
};
getId(data, 1);

//es6 解构赋值
let [a, b, c] = [1, 2, 3];
// console.log(a, b, c)

let person = {"name": "wm", "age": 16};
let {name, age} = person;
// console.log(name,age)
let {name: myName} = person;
// console.log(myName)


//箭头函数
const cn = (a, b) => a + b;
console.log(cn(2, 5));

const sum = (...arg) => {
    let total = 0;
    arg.forEach(item => {
        total += item;
    });
    console.log(total);
};
sum(10, 20);

let arr1 = [1, 2, 3],
    arr2 = [3, 4, 5],
    arr3 = [...arr1, ...arr2];
console.log(arr3);

let arrLike = {
    "0": 1,
    "1": 2,
    "length": 2
};
console.log(Array.from(arrLike, item => item * 2));
//find 方法 fileter 返回[] some true
let arrPerson = [{
    id: 1,
    "name": "wang"
}, {
    id: 2,
    "name": "lizi"
}];
const target = arrPerson.find(item => item.id === 2);

// console.log(target)


//findIndex 返回数组第一个满族条件的下标
let ware = [1, 5, 10, 55, 20];
const target1 = ware.findIndex((item, index) => item > 15);
console.log(target1);

//模板字符串
let res = {
    name: "wwmm",
    age: 20
};

let html = `
    <li class="nav-li" style="color: antiquewhite">${res.name}</li>
    <div>${res.age}</div>
`;
let ul = document.querySelector("#ul .li");
ul.innerHTML = html;

//字符串方法  startsWith()
// and
// endsWith()
// 表示参数字符串是否在字符串头部尾部返回布尔值

//字符串repeat方法 将原来字符串重复n次 返回新字符串
let assort = "wangm";
const snort = assort.repeat(3);
console.log(snort);

//set  构造函数 用来生成Set数据结构 可以里里面的值去重
const s1 = new Set(["a","b","a","b"]);
let arr = [...s1]
console.log(arr)
//set add添加值 delete 删除值返回true  has判断是否set的值  clear清空值

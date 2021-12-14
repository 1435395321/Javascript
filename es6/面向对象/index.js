// es5 写法   创建 和继承
// 父类
function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  console.log(`动物的名字是:${this.name}`);
};
// 子类
function Dog(name, color) {
  Animal.call(this, name); //属性继承
  this.color = color;
}
//方法继承
Dog.prototype = new Animal();
Dog.prototype.constuctor = Dog;

let erHa = new Dog("erha", "黑色");
// console.log(erHa);
// erHa.sayName();

//ECMAScript6 写法
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._sex = -1;
  }
  //定义属性 只读不可改变
  get sex() {
    if (this._sex === 0) {
      return "男";
    } else if (this._sex === 1) {
      return "女";
    } else {
      return new Error("请输入正确的值");
    }
  }
  set sex(val) {
    if (val === 0 || val === 1) {
      this._sex = val;
    }
  }
  showName() {
    return this.name;
  }
}

class Coder extends People {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  showCompany() {
    return "我的公司是:" + this.company;
  }
}
let p1 = new People("wang", "24");
console.log(p1);
p1.sex = 1;
console.log(p1.sex);
let p2 = new Coder("li", "25", "银联");
// console.log(p2.showName());

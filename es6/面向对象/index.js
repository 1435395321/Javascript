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
console.log(erHa);
erHa.sayName();

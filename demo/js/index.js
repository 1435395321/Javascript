/**
 * constructor  ：创建实例
 * */
var that
class Star {
	constructor(name) {
		that = this
		this.name = name
		this.btn = document.querySelector('button')
	}
	sing() {
		console.log(that)
	}
}
var ldex = new Star('刘德华');

/**
 * 继承
 * */
class Father {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	money() {
		console.log('100元 ')
	}
	sum() {
		console.log(this.x+this.y)
	}
	say() {
		return '父类'
	}
}
class child extends Father {
	constructor(x, y) {
		super(x,y);//使用父类的值
	}
	say() {
		console.log(super.say())
	}
	subtract() {
		console.log(this.x -  this.y)
	}
}
var song = new child(1,2);
song.subtract()
song.sum()

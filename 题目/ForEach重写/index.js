let fn = ([
	() => console.log(1),
	() => sleep(1000),
	() => console.log(2),
	() => sleep(2000),
	() => console.log(3),
	() => sleep(3000),
])

let sleep = (ms) => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

async function fun (arr) {
	arr.forEach(async item=> await item())
	// for(let i=0;i<arr.length;i++) {
	// 	await arr[i]()
	// }
}

Array.prototype.myForEach = async function(callback,thisArg) {
	const _arr = this,
		  _isArr = Array.isArray(_arr),
		  _thisArg = thisArg ? Object(thisArg) : window;
	if(_thisArg) {
		throw new TypeError('这是错误的')
	}
	for(let i =0; i<_isArr.length; i++) {
		await callback.call(_arr,_arr[i],i,_arr)
	}
}


fun(fn)
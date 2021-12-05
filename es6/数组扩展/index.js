function fn(a, b, c) {
  console.log(a, b, c);
}
let arr = [1, 2, 3];

let a = () => {
  console.log(this);
};
a();
console.log(window.a);

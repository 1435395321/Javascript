// let a = {
//     _default: 0,
//     toString: function () {
//         return ++this._default;
//     }
// };
var _defalut = 0;
Object.defineProperty(window,"a",{
    get(){
        return ++ _defalut
    }
})
if (a === 1 && a === 2 && a === 3) {
    console.log("条件\'成立");
}

class MVVM {
    constructor(el,data) {
        this.el = document.querySelector(el);
        this._data = data;
        this.init()
    }

    init() {
        //转换响应式
        this.initData();
    }

    initData() {
        const _this = this;
        this.data ={};
        for (let key in this._data) {
        }
    }
}
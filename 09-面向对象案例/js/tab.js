/*
 * 功能需求
 * 点击tab栏，可以切换效果
 * 点击+可以添加tab
 * 点击x 可以删除
 * 双击tab 可以更改标题 和 内容
 */

/*
 * 思路：面向对象
 * 抽取对象tab对象
 * 该对象有 增删改查功能
 */
//创建对象
let that;

class Tab {
    constructor(id) {
        that = this;
        //    获取元素
        this.main = document.querySelector(id);
        this.add = this.main.querySelector(".tabbed");
        this.ul = this.main.querySelector(".fisrstnav ul:first-child");
        this.tabson = this.main.querySelector(".tabscon");
        this.init();
    }

    /**
     * 初始化
     */
    init() {
        this.updateNode();
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
        this.add.onclick = this.addTab;
    }

    /**
     * 重新获取li和section
     */
    updateNode() {
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.remove = this.main.querySelectorAll(".icon-guanbi");
        this.spans = this.main.querySelectorAll(".fisrstnav ul li span:first-child");
    }

    /**
     * tab切换
     */
    toggleTab() {
        that.classClear();
        this.className = "li-active";
        that.sections[this.index].className = "connective";
    }

    /**
     * 添加功能
     * 1.创建li选项卡和内容
     * 2.创建的追加父元素中
     * 3.insertAdjacentHTML
     */
    addTab() {
        that.classClear();
        let li = `<li class="li-active"><span>测试3</span><span class="iconfont icon-guanbi"></span></li>`;
        let section = `<section class="connective">测试1</section>`;
        that.ul.insertAdjacentHTML("beforeend", li);
        that.tabson.insertAdjacentHTML("beforeend", section);
        that.init();
    }

    /**
     * 删除功能
     * 点击删除获取li和section
     * 删除没有索引号 他的父亲li有索引号
     * 点击删除 删除对应的li和section
     * 组织冒泡stopPropagation
     */
    removeTab(e) {
        e.stopPropagation();//组织冒泡防止出发li的点击事件
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector(".li-active")) return;
        //  手动点击
        index--;
        that.lis[index] && that.lis[index].onclick();
    }

    /**
     * 编辑功能
     * 双击禁止选中文字
     */
    editTab() {
        let str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() :document.selection.empty();
        this.innerHTML = `<input type="text" />`;
        let input = this.children[0];
        input.value = str;
        //文本框内容全选
        input.select();
        input.onblur=function (){
            input.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (e){
            if(e.keyCode === 13){
                this.blur();
            }
        }
    }

    /**
     * 清空
     *
     */
    classClear() {
        this.lis.forEach(function (item, index) {
            that.lis[index].className = "";
            that.sections[index].className = "";
        });
    }
}

//实例化对象
new Tab("#tab");
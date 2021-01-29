//递归写法
function formatDataThree(data) {
    let parents = data.filter(p => p.pid === 0);
    let children = data.filter(c => c.pid !== 0);

    dataToTree(parents, children);
    return parents;

    function dataToTree(parents, children) {
        parents.map(p => {
            children.map((c, i) => {
                if (c.pid === p.id) {
                    let _children = JSON.parse(JSON.stringify(children));
                    _children.splice(i, 1);
                    dataToTree([c], _children);
                    if (p.children) {
                        p.children.push(c);
                    } else {
                        p.children = [c];
                    }
                }
            });
        });
    }
}


function formatDataThree1(data) {
    let _data = JSON.parse(JSON.stringify(data));
    return _data.filter(p => {
        let _arr = _data.filter(c => p.id === c.pid);
        if(_arr.length) p.children = _arr
        return p.pid === 0;
    });
}

let treeData = formatDataThree(data);
console.log(treeData);
let treeData1 = formatDataThree1(data);
console.log(treeData1);
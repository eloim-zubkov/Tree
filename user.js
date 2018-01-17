var treeRec = require('./test.js')


var f = (a, b) => {
	return a > b
}

tree = new treeRec.Tree(5);

tree.addData(3, f);
tree.addData(7, f);

tree.passTree();

tree.deleteOnData(3);
console.log("\n");
tree.setData(8);
tree.passTree();

/*alert('работай');*/
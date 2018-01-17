function Tree(data){
	var Rson = null;
	var Lson = null;

	var self = this;

	self.addData = (value) => {
		if(data == undefined){
			data = value;
			return;
		}
		else{
			if (data <= value)
				if (Rson == null){
					Rson = new Tree(value);
				}
				else
					RSon.addData(value);
			else
				if (Lson == null){
					Lson = new Tree(value);
				}
				else
					LSon.addData(value);
			return;
		}
	}

	self.getRson = () =>{
		return Rson;
	}

	self.getLson = () => {
		return Lson;
	}

	self.getData = () =>{
		return data
	}

	self.setData = (value) => {
		data = value;
	}

	self.setLson = (lson) => {
		Lson = lson;
	}

	self.setRson = (rson) => {
		Rson = rson;
	}

	self.passTree = () => {
		console.log(data + ' ');
		if (Lson != null)
			Lson.passTree();
		if (Rson != null)
  			Rson.passTree();
  		return;
	}

	self.deleteOnData = (value) =>{
		if (data > value){
			if (Lson.deleteOnData(value) == 1){
				self.setLson(self.getLson().getLson());
			}
			else if(Lson.deteleOnData(value) == 2){
				self.setLson(self.getLson().getRson());
			}
		}
		else if (data < value){
			if (Rson.deleteOnData(value) == 1){
				self.setRson(self.getRson().getLson());
			}
			else if(Lson.deteleOnData(value) == 2){
				self.setRson(self.getRson().getRson());
			}
		}
		else if (data == value){
			if (Rson != null)
				return 2;
			else if (Lson != null)
				return 1;
			else
				return 1;
		}
		else
			return 0
	}
}

tree = new Tree(5);

tree.addData(3);
tree.addData(7);

tree.passTree();

tree.deleteOnData(3);
console.log("\n");
tree.passTree();

/*alert('работай');*/
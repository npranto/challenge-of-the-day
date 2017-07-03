const simpleAdding = (num) => {
	if(num === 1){
	    return 1;
	}
	return num + simpleAdding(num - 1);
}

export default simpleAdding;
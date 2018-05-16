const kaprekarsConstant = (num) => {
	const orderNumber = (num, sortLogic) => {
		return parseInt(num
			.toString()
			.split('')
			.map(char => parseInt(char))
			.sort(sortLogic)
			.join(''))
	}
    
	const fitForFourDigit = (num) => {
		let newNumberString = num.toString();
		if (newNumberString.length < 4) {
			while(newNumberString.length < 4) {
				newNumberString += '0';
			}
		}
		return parseInt(newNumberString); 
	}
	
	const target = 6174;
	let targetReached = false;
	let attempts = 0;
  
	while(!targetReached) {
		const descendingNumber = orderNumber(num, (a, b) => b - a);
		const ascendingNumber = orderNumber(num, (a, b) => a - b);
		if ((descendingNumber - ascendingNumber) === target) {
			targetReached = true;
		} else {
			num = fitForFourDigit(descendingNumber - ascendingNumber);
		}
		attempts += 1;
	}
	
	return attempts;
}

export default kaprekarsConstant;
const numberOfTimesLetterOccurInWord = (letter, arr) => {
	let totalOccurs = 0;
	arr.forEach((curr, index, arr) => {
		if(curr === letter) {
			totalOccurs = totalOccurs + 1;
		}
	})
	return totalOccurs;
}

export default numberOfTimesLetterOccurInWord;
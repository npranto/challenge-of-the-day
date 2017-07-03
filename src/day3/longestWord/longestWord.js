const longestWord = (str) => {
	return str
			.split(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]+/g)
			.sort((a, b)=>{
				return b.length > a.length;
			})
			.shift();
}

export default longestWord;

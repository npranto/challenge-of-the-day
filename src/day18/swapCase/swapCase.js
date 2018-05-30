import isLetter from './../../day6/isLetter/isLetter';

const swapCase = (str) => {
	return str
		.split('')
		.map(char => {
			return isLetter(char)
				? (char === char.toUpperCase())
					? char.toLowerCase() 
					: char.toUpperCase()
				: char
		})	
		.join('');
};

export default swapCase;
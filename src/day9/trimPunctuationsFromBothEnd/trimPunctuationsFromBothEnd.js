import isLetter from './../../day6/isLetter/isLetter.js';

const trimPunctuationsFromBothEnd = (word) => {
	return word
			.split('')
			.filter((curr, index, arr) => {
				return isLetter(curr);
			})
			.join('');
}

export default trimPunctuationsFromBothEnd;
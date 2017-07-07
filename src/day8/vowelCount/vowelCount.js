import isVowel from './../isVowel/isVowel.js';

const vowelCount = (str) => {
	return str
			.split('')
			.filter((curr, index, array) => {
				return isVowel(curr);
			})
			.length;
}

export default vowelCount;
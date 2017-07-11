import trimPunctuationsFromBothEnd from './../trimPunctuationsFromBothEnd/trimPunctuationsFromBothEnd.js'

const wordCount = (str) => {
	return str
			.split(' ')
			.filter((curr, index, arr) => {
				return /^[a-zA-Z]+$/.test(trimPunctuationsFromBothEnd(curr));
			})
			.length;
}

export default wordCount;
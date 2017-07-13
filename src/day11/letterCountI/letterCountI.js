import trimPunctuationsFromBothEnd from './../../day9/trimPunctuationsFromBothEnd/trimPunctuationsFromBothEnd.js'
import numberOfTimesLetterOccurInWord from './../numberOfTimesLetterOccurInWord/numberOfTimesLetterOccurInWord.js'

const letterCountI = (str) => {
	let mostOccuringLetterWord = '';
	let mostOccuringLetter = '';
	let mostnumberOfOccurs = 0;
	str
		.split(' ')
		.map((word, index, arr) => {
			return trimPunctuationsFromBothEnd(word);
		})
		.forEach((word, index, arr) => {
			word.split('')
				.forEach((letter, index, arr) => {
					if(numberOfTimesLetterOccurInWord(letter, arr) > mostnumberOfOccurs){
						mostnumberOfOccurs = numberOfTimesLetterOccurInWord(letter, arr);
						mostOccuringLetter = letter;
						mostOccuringLetterWord = word;
					}
				})
		})

    return (`"${mostOccuringLetterWord}" contains '${mostOccuringLetter}' (${mostnumberOfOccurs}) times`);
}

export default letterCountI;



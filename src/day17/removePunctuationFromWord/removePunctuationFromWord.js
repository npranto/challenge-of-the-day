const removePunctuationFromWord = (word) => {
		const regexForLettersNumbersAndSpacesOnly = /^[0-9a-zA-Z\s]*$/;
		let chars = word.toString().split('');
    return chars
        .filter(char => {
            return regexForLettersNumbersAndSpacesOnly.test(char)
        })
        .join('');
}

export default removePunctuationFromWord;
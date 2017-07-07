const isVowel = (char) => {
	return (char.length === 1) && (/^[aeiou]$/i.test(char));
}

export default isVowel;
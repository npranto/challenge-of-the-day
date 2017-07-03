const letterChanges = (str) => {
  return str
          .split('')
          .map((curr, index, array) => {
            let nextLetter = getNextLetter(curr);
            isVowel(nextLetter) ? (nextLetter = nextLetter.toUpperCase()) : null
            curr = nextLetter;
            return curr;
          })
          .join('');
}

const getNextLetter = (curr) => {
	if( ((typeof curr) === "string") && (curr.toLowerCase() !== curr.toUpperCase()) ){
		return String.fromCharCode(curr.charCodeAt(0) + 1);
	}
	return curr;
}

const isVowel = (char) => {
  return /[aeiou]/.test(char);
}

export default letterChanges;
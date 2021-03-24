const isVowel = (char) => char.length === 1 && /^[aeiou]$/i.test(char);

export default isVowel;

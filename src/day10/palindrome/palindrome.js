const palindrome = (str) => {
	return str === str.split('').reverse().join('');
}

export default palindrome;
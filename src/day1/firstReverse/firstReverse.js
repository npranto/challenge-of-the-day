const firstReverse = (str) => {
	if (typeof str === "string") {
		return str
				.split('')
				.reverse()
				.join('');
	}
}

export default firstReverse;

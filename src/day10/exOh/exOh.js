const exOh = (str) => {
	let toggler = 0;
	str
		.split('')
		.forEach((curr, index, arr) => {
			(curr === 'x') ? (toggler = toggler + 1) : (toggler = toggler - 1)	// assumes there are only x's and o's in str
		})
	return (toggler === 0) ? true : false;
}

export default exOh;
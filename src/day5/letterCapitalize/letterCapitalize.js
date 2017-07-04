const letterCapitalize = (str) => {
	return str
          .split(' ')
          .map((each) => {
              each = each.charAt(0).toUpperCase() + each.substring(1, each.length);
              return each;
          })
          .join(' ')
}

export default letterCapitalize
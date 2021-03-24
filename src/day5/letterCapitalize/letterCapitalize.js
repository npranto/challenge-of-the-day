const letterCapitalize = (str) =>
  str
    .split(' ')
    .map((each) => {
      // eslint-disable-next-line no-param-reassign
      each = each.charAt(0).toUpperCase() + each.substring(1, each.length);
      return each;
    })
    .join(' ');

export default letterCapitalize;

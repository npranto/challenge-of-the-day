const isLetter = (char) => {
  return (char.length === 1) && (/[a-z]/i.test(char));
}

export default isLetter;
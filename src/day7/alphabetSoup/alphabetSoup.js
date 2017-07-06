const alphabetSoup = (str) => {
  return str
            .split('')
            .sort((curr, next) => {
              return curr.charCodeAt(0) > next.charCodeAt(0);
            })
            .join('');          
}

export default alphabetSoup;
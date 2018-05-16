const formatTime = (num) => {
  return (num < 10) 
    ? `0${num}` 
    : num.toString()
}

export default formatTime;
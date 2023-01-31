function stringLength(str) {
  let count = 0;
  if(str.length !== 0 && str.length <= 10) {
    for(let i in str) {
      count += 1;
    }
  } else {
    throw new Error()
  }
  console.log(count)
  return(count)
}

module.exports = stringLength;
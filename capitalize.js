function capitalize(str) {
  if(typeof(str) !== "string") {
    return "Not allowed"
  } else  {
    let firstLetter = str.charAt(0).toUpperCase()
    let otherChars = str.slice(1)
    return (firstLetter + otherChars)
  }
}

capitalize(33333)

module.exports = capitalize;
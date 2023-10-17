function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0
}

function halfSquare(num) {
  return (num ** 2)/2
}

function exclaim(str) {
  return (str += '!').slice(0, (str.indexOf('!') + 1))
}

function isLong(str) {
  return str.length >= 15
}

function containsDigit(str) {
  for (let char of str){
    if (!isNaN(char) && !(char === ' ')){
      return true
    }
  }
    return false
}

function containsLowerCase(str) {
  return str !== str.toUpperCase()
}

function containsUpperCase(str) {
  return str !== str.toLowerCase()
}

function containsNonAlphanumeric(str) {
  for (let char of str){
    if (char === ' ' || (isNaN(char) === true && (char.toUpperCase() === char.toLowerCase()))){
      return true
    }
  }
  return false
}

function containsSpace(str) {
  return str.includes(' ')
}

function countWords(str) {
  let arr = str.split(' ')
  return arr.length
}

function digits(num) {
  const numStr = num.toString()
  const numArr = []
  for (const char of numStr){
    if (!isNaN(char)){
      numArr.push(parseInt(char))
    }
  }
  return numArr
}

function truncate(title) {
  if (isLong(title)){
    return (title.substring(0,8) + `...`)
  }
  return title
}

function isValidPassword(pwd) {
  return (containsDigit(pwd) && containsLowerCase(pwd) && containsUpperCase(pwd) && containsNonAlphanumeric(pwd) && !containsSpace(pwd))
}

function onlyPunchy(titleArr) {
  let punchyArr = []
  for (let title of titleArr){
    if (!(isLong(exclaim(title)))){
      punchyArr.push(exclaim(title))
    }
  }
  return punchyArr
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}

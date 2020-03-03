/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber(number){
    if (number % 3 ===0 && number % 5 ===0){
      return 'FizzBuzz' 
    }
    else if (number % 3 ===0){
    return 'Fizz'
    }
    else if (number % 5 ===0){
      return 'Buzz'
    }
    else return number
}
function getMiddleLetters(string){
  let result = ''
  for (let i = 0; i <string.length;i++)
  {
    if (string.length % 2===0){
      result = string.slice(string.length/2-1,string.length/2+1)
    }
    else result = string.slice(string.length/2-1,string.length/2+2)
  }return result
}
function getNextLetter(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < alphabet.length;i++){
  
    if(alphabet[i]===string && i===alphabet.length-1){
      return alphabet[0]}
      if(alphabet[i]===string){
        return alphabet[i+1]}
    }
  
}
function getAverage(numberArray){
 let result = 0
//  let stringNumber = numberArray.toString()
  for (const number of numberArray){
    result += Number(number)
  }
 return result/numberArray.length
}

function triStateAreaOnly(array){
  let result = []
  
  for (const city of array){
    if(city.endsWith('NY')|| city.endsWith('CT') || city.endsWith('NJ')){
      result.push(city)
    }
  }return result
}
function removeTrolls(array){
let result = []
let alphabet = 'abcdefghijklmnopqrstuvwxyz'

// for (let i =0;i < array.length;i++){
// let stringArray= array[i].toString()
// if (alphabet.includes(stringArray[i])){
//   result.push(array[i])
// }
// }return result

// }
for (const string of array){
  for (const letter of string){
    if (alphabet.includes(letter)){
      result.push(string)
    }
  }
}return result
}
function cipher(string){
  let result = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for(let i = 0; i < alphabet.length;i++){
  let stringLetter= string[i]
    if(alphabet[i]===stringLetter && i===alphabet.length-1){
      result+= alphabet[0]}
      if(alphabet[i]===stringLetter){
        result+= alphabet[i+1]}
    }
  return result
}
// for (const letter of alphabet){
//   if (string.includes(letter))
//   result += letter
// }return result
// }


function addToMultiDigitNumbers(num,numberArray){
  let result =[]
  let addedNumber = 0
  for (const number of numberArray){
    if (number < 10){
      result.push(number)
    }else{
    addedNumber = number + num
    result.push(addedNumber)}
    
  }return result
}
function hyphenateNames(name){
  
  let result = []
  let hypenatedName=''
  for (let i = name.length-1; i >=0;i--){
    let hypenate = false
    if (name[i][i]===' '&& hypenate === false){
      hypenatedName +='-'
      hypenate = true
      result.push(hypenatedName)
    }else hypenatedName += name[i]
    result.push(hypenatedName)
  }return result
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}

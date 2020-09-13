const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//use .map to test whether each number in the nums array is greater than 0. return a new array with 1 for true, 0 for false
const overZero = nums.map((currentValue) => {return currentValue>0})
// loop over array to determine if all values are true
for (let i = 0; i < overZero.length; i++){
    if (overZero[i] <= 0){
        console.log('Not all of the numbers are greater than zero')
    } else if (i === overZero.length - 1) {
        console.log('All of the numbers are greater than zero')
    }
}

//Determine if every word is shorter than 8 characters
// use .map to return a new array of string lengths

const wordLengths = panagram.map(currentWord => {return currentWord.length})
// Use a loop to compare every word length to 8
for (let i = 0; i < wordLengths.length; i++){
    if (wordLengths[i] >= 8){
        console.log('Not all words are less than 8 characters')
    } else if (i === wordLengths.length - 1) {
        console.log('All words are less than 8 characters long')
    }
}

// Filter the array for numbers less than 4
// Make a new array of all the numbers less than 4 using .map

const lessThanFour = nums.map((currentValue) => {
    if (currentValue < 4) {return currentValue}
})
// since map returns a value for every index, make a new array that only pushes non-null values

const result = []
for (let i = 0; i < lessThanFour.length; i++){
    if (lessThanFour[i] !== undefined){
        result.push(lessThanFour[i])
    }
}

console.log(result)

// filter words that have an even length
// get an array of word lengths, than use modulo to push the even length words into a final array

//using the wordLengths function above

// need an array of indexes and then an array to push the words with even lengths
const evenLengthIndexes = []
const evenLengthWords = []
for (let i = 0; i < wordLengths.length; i++){
    if (wordLengths[i] % 2 === 0) {
        evenLengthIndexes.push(i)
    }
}
for (let i = 0; i < evenLengthIndexes.length; i++) {
    evenLengthWords.push(panagram[evenLengthIndexes[i]])
}

console.log(evenLengthWords)

//find the first value divisible by 5

const byFive = nums.find(num => num % 5 === 0)
console.log(byFive)

//find first word that is longer than five characters 

const longerThanFive = panagram.find(word => word.length > 5)
console.log(longerThanFive)

// there is no word longer than five characters, so this returns undefined

// find index of the first number that is divisible by 3 

const divisibleByThree = nums.findIndex(num => num % 3 === 0)
console.log(divisibleByThree)

//find index of first word that is less than 2 characters long

const lessThanTwoChar = panagram.findIndex(word => word.length < 2)
console.log(lessThanTwoChar)

//returns -1 because there is no such word


// console log every element in the nums array multiplied by 3
// don't need a new variable in this case 
nums.forEach(num => console.log(num * 3))

// console log each word with an exclamation point at the end
panagram.forEach(word => console.log(word + '!'))

//nothing happens to original array, forEach() just acts on each value of an array and either returns it, logs it, whatever you need

// you should be able to store values if you push them

const newValues = [] 
nums.forEach(num => newValues.push(num * 3))
console.log(newValues)

// make a new array of all numbers multiplied by 100

const by100 = nums.map(num => num*100)
console.log(by100)

// make a new array of all words uppercase

const uppercase = panagram.map(word => word.toUpperCase())
console.log(uppercase)

//original array is unchanged
//you are storing the values from map in a new array

//check if some numbers are divisible by 7
//some() will output true or false

const divBy7 = nums.some(num => num % 7 === 0)
if (divBy7) {
    console.log('There is at least one number divisible by 7!')
}

// find if some words have the letter a in them
// need to break the words into arrays of chars and loop through

const hasA = panagram.some(word => word.includes('a') || word.includes('A'))
    

if (hasA) {
    console.log('There is a word with the letter A!')
}

// add all numbers in the array together with reduce

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let total = nums.reduce(reducer)
console.log(total)

//concatenate all the words using reduce

let concat = panagram.reduce(reducer)
console.log(concat)

// sort works on the array in place

nums.sort()
console.log(nums)

panagram.sort()
console.log(panagram)


// need to provide compare functions depending on the sort outcome we want

function ascending(a, b) {
    return a - b;
  }

function descending(a, b) {
    return b - a;
}

nums.sort(ascending)
console.log(nums)
nums.sort(descending)
console.log(nums)



//these are from mozilla mdn, but remove '.name' after a because we are just using strings, not object properties
// must use conditionals when comparing strings
function alphabeticalAsc(a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  };

  // must use conditionals when sorting strings
  function alphabeticalDesc(a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  };




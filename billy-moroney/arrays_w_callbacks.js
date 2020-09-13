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

let concat1 = panagram.reduce(reducer)
console.log(concat1)

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

//create a function that tests to see if every character a-z was used in this array
// const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//reduce into one string
let concat = panagram.reduce((a, b) => {return a + b})
//put in uppercase to ignore characters
concat = concat.toUpperCase()
//split into an array of characters
const chars = concat.split('')
console.log(chars)

//make an array for alphabet in uppercase
var alpha = 'abcdefghijklmnopqrstuvwxyz'
var ALPHA = alpha.toUpperCase()
const alphabet = ALPHA.split('')
console.log(alphabet)

//loop through array for each character and test. if loop reaches end without finding character, return false
const isPanagram = () => {
  for (let i = 0; i < alphabet.length; i++){
    //initilaize a variable that keeps track of whether or not a char exists
    let exists = false
    for (let j = 0; j < chars.length; j++){
      if (chars[j] === alphabet[i]){
        exists = true
      }
    }
    if (exists === false){
      console.log('panagram does not contain every character a-z')
      i = alphabet.length
    } else if (i === alphabet.length - 1){
      console.log('panagram does contain every character a-z')
    }
  }
}

isPanagram()

//filter the array below for products with a price less than 10, then sort alphabetically by product name

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

  const filterProducts = () => {
      //use filter() to get all products with a price under 10
      const under10 = products.filter(product => product.price < 10)
      //declare compare function to use in sort
      // console.log(under10)
      
      const alpha = under10.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
      })
  return alpha
}
console.log(filterProducts())





// DRY

Many programming tools are desinged to help you avoid repeating yourself, so if you find yourself repeating a loop, expression, etc. consider making an abstraction.

// KISS

Any time code becomes too complicated, it becomes very difficult to troubleshoot and may take more effort in the first place .

// AVOID CREATING A YAGNI

Don't add functionality until you need it.

// DO THE SIMPLEST THING THAT COULD POSSIBLY WORK

Similar to KISS , remembering this could help you solve problems efficiently. 

// DON'T MAKE ME THINK

Although this principle at first applies to viewers of your code, you should make code easy enough to read for your own sake 

// WRITE CODE FOR THE MAINTAINER

Any good code is worth preserving for the future, and you will remember the same as an outsider, so emphasize clarity and specific comments 

// SINGLE RESPONSIBILITY PRINCIPLE

A piece of code should only do a single well defined task

// AVOID PREMATURE OPTIMIZATION

Focus on getting your code to work before you attempt making any optimizations

// SEPARATION OF CONCERNS

Don't let a piece of code manage many areas at once

// I think i struggle the most with trying to make premature optimization. I'll get stuck thinking about then just chugging along and getting something to work

//declare function f that accepts an argument l
const f = l => {
    // declare 4 int variables, es, p, c, and n
    let es = 0, p = 0, c = 1, n = 0
    // initialize a while loop that continues as long as the argument, l, is greater than c
    while (c <= l) {
        // new n value
      n = c + p;
      // create an array [c, p] and set it equal to the other new array [n, c]
      [c, p] = [n, c]
      // ternary operation that adds c to the value of es if c is even and adds 0 to es otherwise
      es += (c % 2 === 0) ? c : 0
    }
    // once the loop ends because c is greater than l, return the value of es
    return es
  }
  
  console.log(f(55))

  // Maybe a better name would be findEvenSum
  // Would rather work with f2
  // You do need the semicolon
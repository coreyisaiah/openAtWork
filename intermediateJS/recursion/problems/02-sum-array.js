/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

1. grab the first element
2. add it to a sum varible
3. rinse and repeat until the array is empty
4. return the sum varible

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/
/* 2nd Attempt */
function sumArray(arr){
if (arr.length === 0) return 0

let sum = 0
if (arr.length){
  el = arr.shift()
  sum = el + sumArray(arr)
}
return sum
}

/* 1st Attempt*/
//   if (arr.length === undefined) return []
//   else if (arr.length === 1) return arr[0]

//  sum = arr.shift()
// return sum + sumArray(arr)

console.log(sumArray([1, -2, -3]))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}

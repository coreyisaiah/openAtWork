/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

1. Base case: If end < start return []
2. If start < end push the start into an array and increment start by 1
3. if start === end then return the array

Examples:
range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end, nums = []){
  if (start > end)  return []
  if (start === end) return nums
  if (start < end){
    nums.push(start)
    return range(start+1, end, nums)
  }
}
debugger
console.log(range(1, 5))

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

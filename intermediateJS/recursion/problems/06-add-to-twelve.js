/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

function addToTwelve(array, index = 0){
  if (index >= array.length - 1){
    console.log(false)
    return
  }

  if (array[index] + array[index+1] === 12){
    console.log(true)
    return
  }

  return addToTwelve(array, index+1)
}

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 12, 4, 7, 6]); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}

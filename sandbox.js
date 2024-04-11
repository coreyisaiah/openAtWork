// function addNums(n){


//   product = 1
//   for(let i = 0; i < n; i++){
//     product *= i
//   }
//   return product
// }

// console.time("addNums")
// addNums(999999999)
// console.timeEnd("addNums")

function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (target === arr[mid]) {
      return mid
    }
    if (target < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return `The number '${target}' doesn't live here buckaroo :(`
}
  arr = [-10, -4, -1, 2, 8, 10, 11, 19];

  console.log(binarySearch(arr, 17))
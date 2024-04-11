
function bubbleSort(arr) {
  let swapped
  do{
    swapped = false
    for (let i = 0; i < arr.length -1; i++){
      if (arr[i] > arr[i+1]){
        let temp =  arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  }while(swapped)
    // Iterate through the array
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
function bubbleSort(arr){
    for (let i=0; i < arr.length-1; i++){

        for (let j=0; j < arr.length -1 -i; j++){

            if (arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    
    return arr
}

console.log(bubbleSort([1,23,3,45,4,56,5,2]))
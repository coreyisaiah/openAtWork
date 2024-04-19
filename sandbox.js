const adjList = {
  "a": [2, 5],
  'b': [ 3, 5],
  'c': [2, 4],
  'd': [3, 5, 6],
  'e': [ 2, 4],
  'f': [4]
}

function printDepthFirst(obj, start) {
  const stack = [start];
  
  while(stack.length){
      let curr = stack.pop();
      console.log(curr);

      for(let neighbor of obj[curr]){
          stack.push(neighbor);
      }
  }
};

console.log("First Test:")
printDepthFirst(adjList, 'b'); // Prints 1 through 6 in Depth-first order, starting with 3
                     // One possible solution:  3, 4, 6, 5, 1, 2
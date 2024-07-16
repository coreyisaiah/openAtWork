function binaryTreeSearch(root, target){
    //Base Case if the tree does not exist
    if (root.value === null) return false
    
    if (root.value === target) return true
    else if(binaryTreeSearch(root.left,target)) return true
    else return(binaryTreeSearch(root.right, target))
}
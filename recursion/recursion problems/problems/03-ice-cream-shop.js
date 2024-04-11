/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor. 

Recursively compare each string in the array to the given string

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/
/************************** 2nd Attempt *******************************/
function iceCreamShop(flavors, favorite){
  if (flavors.length === 0 ){
    console.log(false)
    return
  }

  let check = flavors.shift()

  if (check === favorite) {
    console.log(true)
    return 
  }
  else return iceCreamShop(flavors, favorite)
}

iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop([], 'honey lavender'); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}







/************************** 1st Attempt *******************************/
/*function iceCreamShop(flavorsArr, favoriteStr){
  if (flavorsArr.length === 0 ) return false

  let check = flavorsArr.shift()

  if (check === favoriteStr) return true

  return iceCreamShop(flavorsArr, favoriteStr)
}*/
function helper(el1, el2){
  let res;
  if (el1 > el2){
    res = el1;
    return res;
  } else{
    res = el2;
    return res;
  }
}
function multiplyBiggerNumByTwo(num1, num2) {
  return helper(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return helper(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
 return `I ate ${helper(sum1, sum2)} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
    if (helper(weight1, weight2) === weight1){
      return `I adopted a dog that weighs ${weight2} pounds.`;
  } 

  return `I adopted a dog that weighs ${weight1} pounds.`;
 }
 
/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};

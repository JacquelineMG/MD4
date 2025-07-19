const quadSum = (array, num) => {
  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    
    let num1 = array[i];
    let num2 = array[ii];
    const summing = num1 + num2;
    
    if (summing === num) {
      return true;
    } else if (summing > num) {
      ii--;
    } else {
      i++;
    }
  }
  return false;
};

const array = [0, 2, 4, 7, 9, 10];
const num1 = 6;
const num2 = 15;

console.log(quadSum(array, num1));
console.log(quadSum(array, num2));
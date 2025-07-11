const linSearch = (array, item) => {
  let index = null;
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    counter += 1;
    if (array[i] === item) {
      index = i;
      break;
    }
  }
  console.log("lin counter:", counter);
  return index;
};

const biSearch = (array, item) => {
  let min = 0;
  let max = array.length - 1;
  let counter = 0;

  while (true) {
    const midIndex = Math.floor((min + max) / 2);
    const currentItem = array[midIndex];

    if (currentItem === item) {
      console.log("bi counter:", counter);
      return midIndex;
    } else if (currentItem < item) {
      min = midIndex + 1;
      counter += 1;
    } else {
      max = midIndex - 1;
      counter += 1;
    }

    if (min > max) {
      console.log("bi counter:", counter);
      return null;
    }
  }
};

console.log(linSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -10));
console.log(biSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -10));

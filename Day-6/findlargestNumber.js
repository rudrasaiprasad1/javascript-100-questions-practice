const arr = [10, 5, 25, 8, 15];

// Output: 25

const findLargestNum = (array = []) => {
  if (array.length === 0) {
    return false;
  }

  let largest = null;

  /*   method 1 (easy with the existing method ) */
  // largest = Math.max(...array);

  /*   method 2 */
  //   for (const num of array) {
  //     if (num > largest) {
  //       largest = num;
  //     }
  //   }

  /*   method 3 */
  largest = array.reduce((max, current) => Math.max(max, current), -Infinity);
  return largest;
};

console.log(findLargestNum(arr));

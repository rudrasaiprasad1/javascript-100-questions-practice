const arr = [10, 5, 25, 8, 15];

// Output: 25

const findLargestNum = (array = []) => {
  if (array.length === 0) {
    return false;
  }

  let larger = null;

  /*   method 1 (easy with the existing method ) */
  // larger = Math.max(...array);

  /*   method 2 */
  for (const num of array) {
    if (num > larger) {
      larger = num;
    }
  }
  return larger;
};

console.log(findLargestNum(arr));

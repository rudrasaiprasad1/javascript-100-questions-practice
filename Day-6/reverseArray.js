const arr = [1, 2, 3, 4, 5];

// Output: [5, 4, 3, 2, 1]

const revArray = (array = []) => {
  if (array.length === 0) {
    return false;
  }
  let reverse = [];

  for (let i = 1; i <= array.length; i++) {
    let num = array[array.length - i];
    reverse.push(num);
  }

  return reverse;
};

console.log(revArray(arr));

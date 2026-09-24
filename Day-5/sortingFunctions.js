/*
fuction takes the array of unsorted array and return the sorted array.

*/

// const sortArray = (arr = []) => {
//   if (arr == []) {
//     return false;
//   }

// return arr.filter((value,index)=>{
//     if(value )
// })
// };

function bubbleSort(arr) {
  let len = arr.length;

  // Outer loop to trace through the entire array
  for (let i = 0; i < len; i++) {
    // Inner loop to compare adjacent elements
    for (let j = 0; j < len - 1 - i; j++) {
      // Swap if the current number is bigger than the next number
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function functionalQuickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  // Choose the first element as the pivot
  const pivot = arr[0];

  // Rest of the array to filter through
  const rest = arr.slice(1);

  // Filter elements smaller than or equal to the pivot
  const less = rest.filter((num) => num <= pivot);

  // Filter elements larger than the pivot
  const greater = rest.filter((num) => num > pivot);

  // Recursively sort sub-arrays and combine them with the pivot
  return [...functionalQuickSort(less), pivot, ...functionalQuickSort(greater)];
}

// Example usage:
const numbers = [5, 3, 8, 6, 2, 1, 4, 7];
console.log(bubbleSort(numbers));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Example usage:
const sortedNumbers = functionalQuickSort(numbers);

console.log(sortedNumbers);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

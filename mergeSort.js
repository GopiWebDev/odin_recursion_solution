function mergeSort(arr) {
  // base case if the arr is a single digit it'll return itself
  if (arr.length <= 1) return arr;

  // middle value for dividing left and right
  // Math.floor is for rounding the numbers like 1, 2 not 1.5, 2.3
  const mid = Math.floor(arr.length / 2);
  // calling the function itself but slicing it from 0th index to mid value
  const left = mergeSort(arr.slice(0, mid));
  // same for the right but slicing from mid to end value
  const right = mergeSort(arr.slice(mid));

  // returning the function merge which will sort the single numbers
  return merge(left, right);
}

// takes left and right arrays as arguments
function merge(left, right) {
  // initialize with empty array to add sorted numbers
  const result = [];
  // while loop to run only if both arrays has atleast one value it
  while (left.length > 0 && right.length > 0) {
    // finding the lesser value from right and left
    // ex : if left is 1 and right is 1 this will save the left value
    const lesserValue = left[0] < right[0] ? left : right;
    // takes the lesser value and removes it and then stores in smallElement
    const smallElement = lesserValue.shift();
    // pushing the value to result array
    result.push(smallElement);
  }
  // now combining the left and right array
  return result.concat(left, right);
}

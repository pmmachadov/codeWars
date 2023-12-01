// Function to find the length of the missing array in an array of arrays
let getLengthOfMissingArray = (arrayOfArrays) => {

  // Step 1: Get an array of lengths of each sub-array (or default to an empty array if arrayOfArrays is falsy)
  let lengths = (arrayOfArrays || []) // It shows [] because if arrayOfArrays is falsy, it will default to an empty array
    .map(a => a ? a.length : 0) // Map each sub-array to its length, or 0 if the sub-array is falsy.  .map(a => a ? a.length : 0) means if a is truthy, return a.length, else return 0
    .sort((a, b) => a - b); // Sort the array of lengths in ascending order

  // Step 2: Check if there is a sub-array with length 0 (missing array), return 0 in that case
  if (lengths.includes(0)) {
    return 0;
  }

  // Step 3: Iterate through the sorted array of lengths
  for (let i = 0; i < lengths.length - 1; i++) {
    // If there is a gap in the lengths, return the missing length
    if (lengths[i] + 1 !== lengths[i + 1]) { // If lengths[i] + 1 is not equal to lengths[i + 1], return lengths[i] + 1.
    }
  }

  // Step 4: If no missing length is found, return 0
  return 0;
}

// Define a function named dataReverse that takes an array 'data' as input
let dataReverse = (data) => {

  // Calculate the number of bytes in the input data
  const numBytes = data.length / 8;

  // Create an empty array to store the reversed data
  let reversedData = [];

  // Loop through each byte in reverse order
  for (let i = numBytes - 1; i >= 0; i--) {
    // Calculate the start and end indices for each byte in the original data
    let start = i * 8;
    let end = start + 8;

    // Push the bytes of the current iteration to the reversedData array
    reversedData.push(...data.slice(start, end));
  }

  // Return the reversedData array
  return reversedData;
}

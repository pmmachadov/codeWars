// Define a function named 'sortArray' that takes an array of numbers as a parameter.
let sortArray = (array) => {

  // Use the 'filter' method to create a new array containing only the odd numbers from the input array.
  // Then, use the 'sort' method to sort the odd numbers in ascending order.
  const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);

  // Use the 'map' method to create a new array by iterating over each element of the input array.
  // If the element is an odd number, replace it with the smallest odd number from the sorted 'oddNumbers' array,
  // otherwise, keep the original element unchanged.
  const result = array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));

  // Return the resulting array after the mapping process.
  return result;
}

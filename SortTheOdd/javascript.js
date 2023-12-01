let sortArray = (array) => {

  const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b)

  const result = array.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));

  return result;
}


console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])) // [1, 3, 5, 8, 0]
console.log(sortArray([5, 8, 1, 4, 0, 1, 7, 9, 6, 4])) // [1, 8, 1, 4, 0, 5, 7, 9, 6, 4]
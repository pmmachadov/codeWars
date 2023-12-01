let twoSum = (numbers, target) => {
  let numToIndex = {}; // It is called numToIndex because it is a map of numbers to their indices. This means that the keys are numbers and the values are indices.

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    let complement = target - currentNumber;


    if (complement in numToIndex) {
      return [numToIndex[complement], i];
    }

    numToIndex[currentNumber] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

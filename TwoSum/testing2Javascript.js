let towSum = (numbers, target) => {
  const numToIndex = new Map();
  return numbers.map((num, i) => {
    const complement = target - num;
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    return numToIndex.set(num, i).get(num);
  }).filter(result => result !== undefined);
}

console.log(towSum([1, 2, 3], 4)); // [[0, 2]]
console.log(towSum([1234, 5678, 9012], 14690)); // [[1, 2]]
console.log(towSum([2, 2, 3], 4)); // [[0, 1]]

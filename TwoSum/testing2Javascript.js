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
let findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((accumulator, current) => accumulator + current, 0);
    const rightSum = arr.slice(i + 1).reduce((accumulator, current) => accumulator + current, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
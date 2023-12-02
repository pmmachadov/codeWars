function deleteDigit(n) {

  const numStr = n.toString();
  const numLength = numStr.length;

  let maxNumber = -1;
  let maxIndex = -1;

  for (let i = 0; i < numLength; i++) {

    const currentNumber = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
      maxIndex = i;
    }
  }

  return maxNumber;
}
let dataReverse = (data) => {

  const numBytes = data.length / 8;

  let reversedData = [];

  for (let i = numBytes - 1; i >= 0; i--) {
    let start = i * 8;
    let end = start + 8;

    reversedData.push(...data.slice(start, end));
  }

  return reversedData;
}
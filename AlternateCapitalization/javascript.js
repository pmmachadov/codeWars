const capitalize = (string) => {
  const evenChars = string.split('').map((character, index) => (index % 2 === 0 ? character.toUpperCase() : character)).join('');
  const oddChars = string.split('').map((character, index) => (index % 2 === 1 ? character.toUpperCase() : character)).join('');

  return [evenChars, oddChars];
};

console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
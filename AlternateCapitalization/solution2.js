let capitalize = (string) => {

  string = string.toLowerCase();

  let evenCharacters = '';
  let oddCharacters = '';

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      evenCharacters += string[i].toUpperCase();
      oddCharacters += string[i];
    } else {
      evenCharacters += string[i];
      oddCharacters += string[i].toUpperCase();
    }
  }

  return [evenCharacters, oddCharacters];
}

console.log(capitalize('abcdef')); // ['AbCdEf', 'aBcDeF']
console.log(capitalize('codewars')); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize('abracadabra')); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
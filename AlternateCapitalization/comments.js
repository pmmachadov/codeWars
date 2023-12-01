// Define a function named 'capitalize' that takes a string as a parameter.
const capitalize = (string) => {
  // Split the input string into an array of characters, and then use the 'map' function to iterate over each character and its index.
  // For characters at even indexes (index % 2 === 0), convert them to uppercase; otherwise, leave them unchanged.
  const evenChars = string.split('').map((character, index) => (index % 2 === 0 ? character.toUpperCase() : character)).join('');

  // Split the input string into an array of characters, and then use the 'map' function to iterate over each character and its index.
  // For characters at odd indexes (index % 2 === 1), convert them to uppercase; otherwise, leave them unchanged.
  const oddChars = string.split('').map((character, index) => (index % 2 === 1 ? character.toUpperCase() : character)).join('');

  // Return an array containing two strings: one with characters at even indexes capitalized and one with characters at odd indexes capitalized.
  return [evenChars, oddChars];
};

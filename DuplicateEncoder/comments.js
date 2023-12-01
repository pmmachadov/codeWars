// Define a function called duplicateEncode
let duplicateEncode = (word) => {
  // Convert the input word to lowercase to ensure case-insensitivity
  word = word.toLowerCase();

  // Initialize an empty string to store the result
  let result = "";

  // Iterate through each character in the input word
  for (let i = 0; i < word.length; i++) {
    // Check if the current character is a duplicate in the word
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      // If it's a duplicate, append ")" to the result string
      result += ")";
    } else {
      // If it's not a duplicate, append "(" to the result string
      result += "(";
    }
  }

  // Return the final result string
  return result;
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success")); // ")())())"

let proofread = (str) => {

  let sentences = str.split(". ");

  let correctedSentences = sentences.map(sentence => {

    let firstLetter = sentence[0].toUpperCase();
    let restOfSentence = sentence.slice(1).toLowerCase();
    let correctedSentence = firstLetter + restOfSentence;

    return correctedSentence.replace(/ie/g, "ei");
  });

  let correctedText = correctedSentences.join(". ");

  return correctedText;
}

console.log(proofread("ThiS is a good example"));
console.log(proofread("this is a bad example"));
console.log(proofread("I before E except after C"));
console.log(proofread("I before E after C"));
console.log(proofread("I before E except after C or when sounded as A as in neighbor and weigh"));

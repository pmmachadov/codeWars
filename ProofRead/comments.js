// La función proofread toma una cadena 'str' como entrada y corrige errores ortográficos.
let proofread = (str) => {
  // Divide la cadena en oraciones utilizando el punto y espacio como delimitadores.
  let sentences = str.split(". ");

  // Utiliza el método 'map' para aplicar una transformación a cada oración.
  let correctedSentences = sentences.map(sentence => {
    // Capitaliza la primera letra de la oración.
    let firstLetter = sentence[0].toUpperCase();
    // Convierte el resto de la oración a minúsculas.
    // Slice(1) devuelve una nueva cadena que comienza en el índice 1 de la cadena original.
    let restOfSentence = sentence.slice(1).toLowerCase();
    // Combina la primera letra capitalizada con el resto de la oración y reemplaza 'ie' con 'ei'.
    let correctedSentence = firstLetter + restOfSentence;
    return correctedSentence.replace(/ie/g, "ei"); // g significa global
  });

  // Une las oraciones corregidas utilizando un punto y espacio como separador.
  let correctedText = correctedSentences.join(". ");

  // Devuelve el texto corregido.
  return correctedText;
}

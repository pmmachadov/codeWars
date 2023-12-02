function cake(x, debris) {
  // Definición del alfabeto para calcular el índice de los caracteres
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Variable para almacenar la suma de los valores de los caracteres
  let total = 0;

  // Iteración a través de los caracteres en el arreglo 'debris'
  for (let i = 0; i < debris.length; i++) {
    // Si el índice es par (comenzando desde 0), suma el valor del carácter según su código ASCII
    if (i % 2 === 0) {
      total += debris.charCodeAt(i);
    } else {
      // Si el índice es impar, calcula el índice del carácter en el alfabeto y suma 1
      const charIndex = alphabet.indexOf(debris[i]) + 1;
      total += charIndex;
    }
  }

  // Comprueba si la proporción total/x es mayor que 0.7
  if (total / x > 0.7) {
    return 'Fire!'; // Devuelve 'Fire!' si la proporción es mayor al 70%
  } else {
    return 'That was close!'; // Devuelve 'That was close!' si la proporción es menor o igual al 70%
  }
}

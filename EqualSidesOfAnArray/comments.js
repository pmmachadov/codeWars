// Función que encuentra el índice en el que la suma de los elementos a la izquierda es igual a la suma de los elementos a la derecha
let findEvenIndex = (arr) => {
  // Itera a través de cada índice en el arreglo
  for (let i = 0; i < arr.length; i++) {
    // Calcula la suma de los elementos a la izquierda del índice actual
    const leftSum = arr.slice(0, i).reduce((accumulator, current) => accumulator + current, 0);

    // Calcula la suma de los elementos a la derecha del índice actual
    const rightSum = arr.slice(i + 1).reduce((accumulator, current) => accumulator + current, 0);

    // Compara las sumas de ambos lados, si son iguales, se ha encontrado el índice buscado
    if (leftSum === rightSum) {
      return i;
    }
  }

  // Si no se encuentra ningún índice, devuelve -1
  return -1;
}

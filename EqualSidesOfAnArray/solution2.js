let findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // Calcula la suma de los elementos a la izquierda del índice actual
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    // Calcula la suma de los elementos a la derecha del índice actual
    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }

    // Compara las sumas de ambos lados, si son iguales, se ha encontrado el índice buscado
    if (leftSum === rightSum) {
      return i;
    }
  }

  // Si no se encuentra ningún índice, devuelve -1
  return -1;
}

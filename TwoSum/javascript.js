let twoSum = (numbers, target) => {
  // Crea un objeto Map para almacenar los números y sus índices.
  const numToIndex = new Map();

  // Utiliza el método map para iterar sobre el array 'numbers' y generar un nuevo array de resultados.
  return numbers.map((num, i) => {
    // Calcula el complemento necesario para alcanzar el objetivo.
    const complement = target - num;

    // Verifica si el complemento está presente en el Map.
    if (numToIndex.has(complement)) {
      // Si se encuentra, devuelve un array con los índices de los dos números que suman al objetivo.
      return [numToIndex.get(complement), i];
    }

    // Si no se encuentra, actualiza el Map con el número actual y su índice, y devuelve undefined.
    return numToIndex.set(num, i).get(num);
  }).filter(result => result !== undefined);
  // Filtra los resultados para eliminar aquellos que son undefined (cuando no se encuentra una pareja que sume al objetivo).
}

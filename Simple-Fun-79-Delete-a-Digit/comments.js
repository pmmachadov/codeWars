function deleteDigit(n) {
  // Convierte el número a una cadena para trabajar con cada dígito individualmente
  const numStr = n.toString();
  const numLength = numStr.length;

  // Inicializa variables para almacenar el número máximo y su índice correspondiente
  let maxNumber = -1; // El número máximo debe ser mayor que cualquier número posible
  let maxIndex = -1;  // El índice máximo debe ser mayor que cualquier índice posible

  // Itera a través de cada dígito del número
  for (let i = 0; i < numLength; i++) {
    // Elimina el i-ésimo dígito y convierte el resultado a un número
    const currentNumber = parseInt(numStr.substring(0, i) + numStr.substring(i + 1));

    // Compara el número actual con el número máximo encontrado hasta ahora
    if (currentNumber > maxNumber) {
      // Si el número actual es mayor, actualiza el número máximo y su índice
      maxNumber = currentNumber;
      maxIndex = i;
    }
  }

  // Devuelve el número máximo obtenido al eliminar un dígito
  return maxNumber;
}

console.log(deleteDigit(152)); // 52
console.log(deleteDigit(1001)); // 101
console.log(deleteDigit(10)); // 1
console.log(deleteDigit(222219)); // 22229
console.log(deleteDigit(1054877449)); // 154877449
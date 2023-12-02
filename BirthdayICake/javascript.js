function cake(x, debris) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let total = 0;

  for (let i = 0; i < debris.length; i++) {
    if (i % 2 === 0) {
      total += debris.charCodeAt(i);
    } else {
      const charIndex = alphabet.indexOf(debris[i]) + 1;
      total += charIndex;
    }
  }

  if (total / x > 0.7) {
    return 'Fire!';
  } else {
    return 'That was close!';
  }
}
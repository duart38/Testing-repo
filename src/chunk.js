export function chunk(input, size) {
  const pieces = [];
  for (let i = 0; i < input.length; i += size) {
    pieces.push(input.slice(i, i + size));
  }
  return pieces;
}

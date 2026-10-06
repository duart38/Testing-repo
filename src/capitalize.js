export function capitalize(input) {
  if (input.length === 0) return input;
  return input[0].toUpperCase() + input.slice(1);
}

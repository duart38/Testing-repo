export function titleCase(input) {
  return input
    .toLowerCase()
    .replace(/\b([a-z])/g, (letter) => letter.toUpperCase());
}

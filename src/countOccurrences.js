export function countOccurrences(input, needle) {
  if (needle === "") return 0;
  return input.split(needle).length - 1;
}

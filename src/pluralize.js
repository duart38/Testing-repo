export function pluralize(word, count, plural = word + "s") {
  return count === 1 ? word : plural;
}

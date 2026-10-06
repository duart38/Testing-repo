export function normalizeNewlines(input) {
  return input.replace(/\r\n|\r/g, "\n");
}

/** Replaces all line endings (Windows \r\n and old Mac \r) with Unix \n. */
export function normalizeNewlines(input) {
  return input.replace(/\r\n|\r/g, "\n");
}

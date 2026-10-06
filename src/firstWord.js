/** Returns the first word of a string, or an empty string if there is none. */
export function firstWord(input) {
  const trimmed = input.trim();
  const match = trimmed.match(/^\S+/);
  return match ? match[0] : "";
}

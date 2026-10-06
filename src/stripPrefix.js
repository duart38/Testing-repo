/** Removes the prefix from the start of the input string if present, otherwise returns the string unchanged. */
export function stripPrefix(input, prefix) {
  if (input.startsWith(prefix)) {
    return input.slice(prefix.length);
  }
  return input;
}

/**
 * Removes a suffix from the end of a string if present.
 */
export function stripSuffix(input, suffix) {
  if (input.endsWith(suffix)) {
    return input.slice(0, -suffix.length);
  }
  return input;
}

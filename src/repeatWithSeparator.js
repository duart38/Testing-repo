/**
 * Repeats a string a specified number of times, joined by a separator.
 */
export function repeatWithSeparator(str, times, separator) {
  return Array(times).fill(str).join(separator);
}

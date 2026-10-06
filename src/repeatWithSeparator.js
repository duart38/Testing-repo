export function repeatWithSeparator(str, times, separator) {
  return Array(times).fill(str).join(separator);
}

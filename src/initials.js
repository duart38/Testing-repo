/**
 * Return the uppercase initials of each word.
 */
export function initials(input) {
  return input
    .split(/[^A-Za-z]+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .join("");
}

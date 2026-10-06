/**
 * Check whether a string reads the same backwards, ignoring case and punctuation.
 */
export function isPalindrome(input) {
  const letters = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  return letters === [...letters].reverse().join("");
}

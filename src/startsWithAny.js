/** Returns true if the input string starts with any of the given prefixes. */
export function startsWithAny(input, prefixes) {
  return prefixes.some((prefix) => input.startsWith(prefix));
}

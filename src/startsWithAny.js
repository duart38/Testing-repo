export function startsWithAny(input, prefixes) {
  return prefixes.some((prefix) => input.startsWith(prefix));
}

export function stripPrefix(input, prefix) {
  if (input.startsWith(prefix)) {
    return input.slice(prefix.length);
  }
  return input;
}

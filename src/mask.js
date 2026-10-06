export function mask(input, visible = 4, char = "*") {
  if (input.length <= visible) return input;
  return char.repeat(input.length - visible) + input.slice(-visible);
}

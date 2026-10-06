export function truncate(input, max) {
  if (input.length <= max) return input;
  return input.slice(0, Math.max(0, max - 1)) + "…";
}

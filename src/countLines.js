export function countLines(input) {
  if (input.length === 0) return 0;
  return (input.match(/\n/g) || []).length + (input.endsWith("\n") ? 0 : 1);
}

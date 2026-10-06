export function wordCount(input) {
  const trimmed = input.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

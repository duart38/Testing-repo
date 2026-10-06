export function firstWord(input) {
  const trimmed = input.trim();
  const match = trimmed.match(/^\S+/);
  return match ? match[0] : "";
}

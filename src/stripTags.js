export function stripTags(input) {
  return input.replace(/<[^>]*>/g, "");
}

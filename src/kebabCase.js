export function kebabCase(input) {
  return input
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part.toLowerCase())
    .join("-");
}

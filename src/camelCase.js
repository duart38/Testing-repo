export function camelCase(input) {
  const parts = input.split(/[^A-Za-z0-9]+/).filter(Boolean);
  return parts
    .map((part, i) => {
      const lower = part.toLowerCase();
      return i === 0 ? lower : lower[0].toUpperCase() + lower.slice(1);
    })
    .join("");
}

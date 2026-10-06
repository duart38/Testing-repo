export function ellipsisMiddle(input, max) {
  if (input.length <= max) return input;
  const keep = max - 1;
  const head = Math.floor(keep / 2) + 1;
  return input.slice(0, head) + "…" + input.slice(input.length - (keep - head));
}

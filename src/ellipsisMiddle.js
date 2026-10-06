export function ellipsisMiddle(input, max) {
  if (input.length <= max) return input;
  const keep = max - 1;
  const head = Math.ceil(keep / 2);
  return input.slice(0, head) + "…" + input.slice(input.length - (keep - head));
}

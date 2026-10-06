export function leftPad(input, length, fill = " ") {
  if (input.length >= length) return input;
  return fill.repeat(length - input.length) + input;
}

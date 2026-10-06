export function removeAccents(input) {
  return input.normalize("NFC").replace(/[\u0300-\u036f]/g, "");
}

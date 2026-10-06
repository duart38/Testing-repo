const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export function escapeHtml(input) {
  return input.replace(/[&<>"']/g, (char) => ENTITIES[char]);
}

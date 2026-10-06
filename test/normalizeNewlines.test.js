import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizeNewlines } from "../src/normalizeNewlines.js";

test("normalizeNewlines: mixed line endings", () => {
  assert.equal(normalizeNewlines("a\r\nb\rc"), "a\nb\nc");
});

test("normalizeNewlines: empty string", () => {
  assert.equal(normalizeNewlines(""), "");
});

test("normalizeNewlines: already normalized", () => {
  assert.equal(normalizeNewlines("a\nb\nc"), "a\nb\nc");
});

test("normalizeNewlines: windows only", () => {
  assert.equal(normalizeNewlines("x\r\ny\r\nz"), "x\ny\nz");
});

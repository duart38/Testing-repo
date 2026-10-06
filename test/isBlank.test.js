import { test } from "node:test";
import assert from "node:assert/strict";
import { isBlank } from "../src/isBlank.js";

test("isBlank: basic", () => {
  assert.equal(isBlank("noodle"), false);
});

test("isBlank: mixed input", () => {
  assert.equal(isBlank("stone"), false);
});

test("isBlank: edge case", () => {
  assert.equal(isBlank(""), true);
});

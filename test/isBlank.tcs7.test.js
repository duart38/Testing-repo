import { test } from "node:test";
import assert from "node:assert/strict";
import { isBlank } from "../src/isBlank.js";

test("isBlank: regression fcxg", () => {
  assert.equal(isBlank("\n\t"), true);
});

test("isBlank: mixed input 4m0l", () => {
  assert.equal(isBlank("   "), true);
});

test("isBlank: basic 5y6n", () => {
  assert.equal(isBlank("Cherry"), false);
});

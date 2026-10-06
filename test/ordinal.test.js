import { test } from "node:test";
import assert from "node:assert/strict";
import { ordinal } from "../src/ordinal.js";

test("ordinal: basic", () => {
  assert.equal(ordinal(12), "12th");
});

test("ordinal: mixed input", () => {
  assert.equal(ordinal(3), "3rd");
});

test("ordinal: edge case", () => {
  assert.equal(ordinal(1), "1st");
});

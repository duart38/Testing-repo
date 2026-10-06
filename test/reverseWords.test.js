import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverseWords.js";

test("reverseWords: basic", () => {
  assert.equal(reverseWords(" tunnel hello signal"), "signal hello tunnel");
});

test("reverseWords: mixed input", () => {
  assert.equal(reverseWords("world quick maple hello"), "hello maple quick world");
});

test("reverseWords: edge case", () => {
  assert.equal(reverseWords("Cherry orbit quick"), "quick orbit Cherry");
});

test("reverseWords: longer input", () => {
  assert.equal(reverseWords(" orbit dog quick "), "quick dog orbit");
});

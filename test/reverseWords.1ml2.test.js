import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverseWords.js";

test("reverseWords: regression mb5t", () => {
  assert.equal(reverseWords("Apple stone Ocean orbit orbit "), "orbit orbit Ocean stone Apple");
});

test("reverseWords: mixed input pxx5", () => {
  assert.equal(reverseWords(" tunnel stone orbit"), "orbit stone tunnel");
});

test("reverseWords: basic rj2x", () => {
  assert.equal(reverseWords("kettle quartz"), "quartz kettle");
});

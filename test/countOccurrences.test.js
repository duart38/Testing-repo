import { test } from "node:test";
import assert from "node:assert/strict";
import { countOccurrences } from "../src/countOccurrences.js";

test("countOccurrences: basic", () => {
  assert.equal(countOccurrences("quartz rocket quick", "o"), 1);
});

test("countOccurrences: mixed input", () => {
  assert.equal(countOccurrences("Summer  quartz  quick  signal", "e"), 1);
});

test("countOccurrences: edge case", () => {
  assert.equal(countOccurrences("lazy-Apple-pixel-kettle", "an"), 0);
});

test("countOccurrences: longer input", () => {
  assert.equal(countOccurrences("maple-world-kettle", " "), 0);
});

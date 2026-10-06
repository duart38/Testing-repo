import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverseWords.js";

test("reverseWords: edge case o3ol", () => {
  assert.equal(reverseWords(" quick  brown "), "brown quick");
});

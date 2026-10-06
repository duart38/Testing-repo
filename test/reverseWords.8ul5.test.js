import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverseWords.js";

test("reverseWords: another example um8i", () => {
  assert.equal(reverseWords("river quick velvet velvet "), "velvet velvet quick river");
});

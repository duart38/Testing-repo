import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverseWords.js";

test("reverseWords: edge case 7ew0", () => {
  assert.equal(reverseWords("noodle banana fox"), "fox banana noodle");
});

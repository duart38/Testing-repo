import { test } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "../src/isPalindrome.js";

test("isPalindrome: another example egsg", () => {
  assert.equal(isPalindrome("river"), false);
});

test("isPalindrome: mixed input 8oqe", () => {
  assert.equal(isPalindrome("Step on no pets"), true);
});

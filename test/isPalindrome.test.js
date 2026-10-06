import { test } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "../src/isPalindrome.js";

test("isPalindrome: basic", () => {
  assert.equal(isPalindrome("Was it a car"), false);
});

test("isPalindrome: mixed input", () => {
  assert.equal(isPalindrome("Apple Ocean"), false);
});

test("isPalindrome: edge case", () => {
  assert.equal(isPalindrome("Was it a car"), false);
});

test("isPalindrome: longer input", () => {
  assert.equal(isPalindrome("Step on no pets"), true);
});

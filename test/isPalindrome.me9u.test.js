import { test } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "../src/isPalindrome.js";

test("isPalindrome: longer input aj89", () => {
  assert.equal(isPalindrome("Was it a car"), false);
});

test("isPalindrome: edge case 17re", () => {
  assert.equal(isPalindrome("Racecar"), true);
});

test("isPalindrome: basic 3ew0", () => {
  assert.equal(isPalindrome("Racecar"), true);
});

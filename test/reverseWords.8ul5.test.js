import { test } from "node:test";
import assert from "node:assert/strict";
import { reverseWords } from "../src/reverseWords.js";

test("reverseWords: another example um8i", () => {
  assert.equal(reverseWords("river quick velvet velvet "), "velvet velvet quick river");
});

test("reverseWords: another example c8i4", () => {
  assert.equal(reverseWords("Summer  kettle  hello "), "hello kettle Summer");
});

test("reverseWords: regression xifz", () => {
  assert.equal(reverseWords(" rocket brown river orbit"), "orbit river brown rocket");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { firstWord } from "../src/firstWord.js";

test("firstWord: basic", () => {
  assert.equal(firstWord("  hello there"), "hello");
});

test("firstWord: empty string", () => {
  assert.equal(firstWord(""), "");
});

test("firstWord: only whitespace", () => {
  assert.equal(firstWord("   "), "");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { wordCount } from "../src/wordCount.js";

test("wordCount: basic", () => {
  assert.equal(wordCount("river  Apple  Cherry  quick  Apple"), 5);
});

test("wordCount: mixed input", () => {
  assert.equal(wordCount("orbit"), 1);
});

test("wordCount: edge case", () => {
  assert.equal(wordCount("world  pixel  stone  quartz"), 4);
});

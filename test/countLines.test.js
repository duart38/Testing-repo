import { test } from "node:test";
import assert from "node:assert/strict";
import { countLines } from "../src/countLines.js";

test("countLines: trailing newline", () => {
  assert.equal(countLines("a\nb\n"), 2);
});

test("countLines: empty string", () => {
  assert.equal(countLines(""), 0);
});

test("countLines: single line", () => {
  assert.equal(countLines("hello world"), 1);
});

test("countLines: multiple lines without trailing newline", () => {
  assert.equal(countLines("a\nb\nc"), 3);
});

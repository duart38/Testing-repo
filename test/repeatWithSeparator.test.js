import { test } from "node:test";
import assert from "node:assert/strict";
import { repeatWithSeparator } from "../src/repeatWithSeparator.js";

test("repeatWithSeparator: basic example", () => {
  assert.equal(repeatWithSeparator("ab", 3, "-"), "ab-ab-ab");
});

test("repeatWithSeparator: empty string", () => {
  assert.equal(repeatWithSeparator("", 3, "-"), "--");
});

test("repeatWithSeparator: single repeat", () => {
  assert.equal(repeatWithSeparator("hello", 1, " "), "hello");
});

test("repeatWithSeparator: comma separator", () => {
  assert.equal(repeatWithSeparator("x", 4, ","), "x,x,x,x");
});

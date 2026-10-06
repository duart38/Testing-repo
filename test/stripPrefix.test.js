import { test } from "node:test";
import assert from "node:assert/strict";
import { stripPrefix } from "../src/stripPrefix.js";

test("stripPrefix: removes prefix when present", () => {
  assert.equal(stripPrefix("unhappy", "un"), "happy");
});

test("stripPrefix: empty string input", () => {
  assert.equal(stripPrefix("", "prefix"), "");
});

test("stripPrefix: prefix not present", () => {
  assert.equal(stripPrefix("hello", "goodbye"), "hello");
});

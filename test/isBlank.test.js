import { test } from "node:test";
import assert from "node:assert/strict";
import { isBlank } from "../src/isBlank.js";

test("isBlank: basic", () => {
  assert.equal(isBlank("noodle"), false);
});

test("isBlank: mixed input", () => {
  assert.equal(isBlank("stone"), false);
});

test("isBlank: edge case", () => {
  assert.equal(isBlank(""), true);
});

test("isBlank: basic ncxu", () => {
  assert.equal(isBlank("\n\t"), true);
});

test("isBlank: edge case mbk4", () => {
  assert.equal(isBlank("\n\t"), true);
});

test("isBlank: another example 9vw0", () => {
  assert.equal(isBlank("\n\t"), true);
});

test("isBlank: longer input iqih", () => {
  assert.equal(isBlank("   "), true);
});

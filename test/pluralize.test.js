import { test } from "node:test";
import assert from "node:assert/strict";
import { pluralize } from "../src/pluralize.js";

test("pluralize: basic", () => {
  assert.equal(pluralize("branch", 0), "branchs");
});

test("pluralize: mixed input", () => {
  assert.equal(pluralize("review", 1), "review");
});

test("pluralize: edge case", () => {
  assert.equal(pluralize("review", 2), "reviews");
});

test("pluralize: basic d4lu", () => {
  assert.equal(pluralize("file", 0), "files");
});

test("pluralize: another example rk1o", () => {
  assert.equal(pluralize("review", 1), "review");
});

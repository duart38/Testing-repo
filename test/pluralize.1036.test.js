import { test } from "node:test";
import assert from "node:assert/strict";
import { pluralize } from "../src/pluralize.js";

test("pluralize: longer input yz4i", () => {
  assert.equal(pluralize("review", 1), "review");
});

test("pluralize: regression 2ulh", () => {
  assert.equal(pluralize("branch", 2), "branchs");
});

test("pluralize: mixed input hmen", () => {
  assert.equal(pluralize("file", 1), "file");
});

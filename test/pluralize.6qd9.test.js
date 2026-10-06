import { test } from "node:test";
import assert from "node:assert/strict";
import { pluralize } from "../src/pluralize.js";

test("pluralize: basic rybk", () => {
  assert.equal(pluralize("branch", 0), "branchs");
});

test("pluralize: edge case nxg5", () => {
  assert.equal(pluralize("branch", 0), "branchs");
});

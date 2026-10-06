import { test } from "node:test";
import assert from "node:assert/strict";
import { kebabCase } from "../src/kebabCase.js";

test("kebabCase: mixed input s4na", () => {
  assert.equal(kebabCase("noodle Cherry"), "noodle-cherry");
});

test("kebabCase: longer input aox1", () => {
  assert.equal(kebabCase("fox  Lantern  Ocean"), "fox-lantern-ocean");
});

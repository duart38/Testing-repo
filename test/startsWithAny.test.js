import { test } from "node:test";
import assert from "node:assert/strict";
import { startsWithAny } from "../src/startsWithAny.js";

test("startsWithAny: with matching prefix", () => {
  assert.equal(startsWithAny("feature/login", ["fix/", "feature/"]), true);
});

test("startsWithAny: with empty string", () => {
  assert.equal(startsWithAny("", ["fix/", "feature/"]), false);
});

test("startsWithAny: no matching prefix", () => {
  assert.equal(startsWithAny("bugfix/login", ["fix/", "feature/"]), false);
});

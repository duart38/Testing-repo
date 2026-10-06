import { test } from "node:test";
import assert from "node:assert/strict";
import { initials } from "../src/initials.js";

test("initials: another example mjvq", () => {
  assert.equal(initials("stone velvet"), "SV");
});

test("initials: basic bi5t", () => {
  assert.equal(initials("quartz tunnel"), "QT");
});

test("initials: longer input o1zs", () => {
  assert.equal(initials("world Summer pixel"), "WSP");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { initials } from "../src/initials.js";

test("initials: another example fzi3", () => {
  assert.equal(initials("dog_quick"), "DQ");
});

test("initials: edge case 048t", () => {
  assert.equal(initials("kettle_Ocean_lazy"), "KOL");
});

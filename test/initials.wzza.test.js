import { test } from "node:test";
import assert from "node:assert/strict";
import { initials } from "../src/initials.js";

test("initials: another example wpfz", () => {
  assert.equal(initials("velvet_quartz"), "VQ");
});

test("initials: basic csmq", () => {
  assert.equal(initials("fox  kettle"), "FK");
});

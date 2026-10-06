import { test } from "node:test";
import assert from "node:assert/strict";
import { initials } from "../src/initials.js";

test("initials: mixed input pxa6", () => {
  assert.equal(initials("Lantern world"), "LW");
});

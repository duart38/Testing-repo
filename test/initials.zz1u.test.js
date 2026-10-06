import { test } from "node:test";
import assert from "node:assert/strict";
import { initials } from "../src/initials.js";

test("initials: mixed input vfle", () => {
  assert.equal(initials("pixel  velvet"), "PV");
});

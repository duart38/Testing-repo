import { test } from "node:test";
import assert from "node:assert/strict";
import { initials } from "../src/initials.js";

test("initials: basic", () => {
  assert.equal(initials("kettle-river-pixel"), "KRP");
});

test("initials: mixed input", () => {
  assert.equal(initials("quick_signal_kettle"), "QSK");
});

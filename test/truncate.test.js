import { test } from "node:test";
import assert from "node:assert/strict";
import { truncate } from "../src/truncate.js";

test("truncate: basic", () => {
  assert.equal(truncate("quick_signal_lazy_lazy_hello", 9), "quick_si…");
});

test("truncate: mixed input", () => {
  assert.equal(truncate("velvet kettle maple orbit rocket", 3), "ve…");
});

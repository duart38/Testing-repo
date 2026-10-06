import { test } from "node:test";
import assert from "node:assert/strict";
import { kebabCase } from "../src/kebabCase.js";

test("kebabCase: edge case 4nt7", () => {
  assert.equal(kebabCase("Lantern-rocket-banana-world"), "lantern-rocket-banana-world");
});

test("kebabCase: regression c1o3", () => {
  assert.equal(kebabCase("noodle_quartz_lazy_Summer"), "noodle-quartz-lazy-summer");
});

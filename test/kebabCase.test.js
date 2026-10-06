import { test } from "node:test";
import assert from "node:assert/strict";
import { kebabCase } from "../src/kebabCase.js";

test("kebabCase: basic", () => {
  assert.equal(kebabCase("fox signal banana"), "fox-signal-banana");
});

test("kebabCase: mixed input", () => {
  assert.equal(kebabCase("Apple  Summer"), "apple-summer");
});

test("kebabCase: edge case", () => {
  assert.equal(kebabCase("lazy Ocean brown stone"), "lazy-ocean-brown-stone");
});

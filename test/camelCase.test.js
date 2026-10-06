import { test } from "node:test";
import assert from "node:assert/strict";
import { camelCase } from "../src/camelCase.js";

test("camelCase: basic", () => {
  assert.equal(camelCase("Lantern-maple"), "lanternMaple");
});

test("camelCase: mixed input", () => {
  assert.equal(camelCase("banana lazy Apple signal"), "bananaLazyAppleSignal");
});

test("camelCase: edge case", () => {
  assert.equal(camelCase("pixel  stone"), "pixelStone");
});

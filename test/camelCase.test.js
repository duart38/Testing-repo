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

test("camelCase: longer input yj45", () => {
  assert.equal(camelCase("Lantern lazy noodle"), "lanternLazyNoodle");
});

test("camelCase: edge case 07s0", () => {
  assert.equal(camelCase("Ocean quartz"), "oceanQuartz");
});

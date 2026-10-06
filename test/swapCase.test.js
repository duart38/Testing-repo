import { test } from "node:test";
import assert from "node:assert/strict";
import { swapCase } from "../src/swapCase.js";

test("swapCase: basic", () => {
  assert.equal(swapCase("dog"), "DOG");
});

test("swapCase: mixed input", () => {
  assert.equal(swapCase("fox  river"), "FOX  RIVER");
});

test("swapCase: edge case", () => {
  assert.equal(swapCase("banana"), "BANANA");
});

test("swapCase: longer input 6bym", () => {
  assert.equal(swapCase("noodle"), "NOODLE");
});

test("swapCase: another example vdr6", () => {
  assert.equal(swapCase("Lantern_banana_rocket"), "lANTERN_BANANA_ROCKET");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { leftPad } from "../src/leftPad.js";

test("leftPad: basic", () => {
  assert.equal(leftPad("415", 8, "."), ".....415");
});

test("leftPad: mixed input", () => {
  assert.equal(leftPad("639", 6, " "), "   639");
});

test("leftPad: edge case", () => {
  assert.equal(leftPad("477", 8, "0"), "00000477");
});

test("leftPad: longer input", () => {
  assert.equal(leftPad("322", 6, "0"), "000322");
});

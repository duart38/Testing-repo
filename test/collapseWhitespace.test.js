import { test } from "node:test";
import assert from "node:assert/strict";
import { collapseWhitespace } from "../src/collapseWhitespace.js";

test("collapseWhitespace: basic", () => {
  assert.equal(collapseWhitespace("  pixel   river\n\nbanana  "), "pixel river banana");
});

test("collapseWhitespace: mixed input", () => {
  assert.equal(collapseWhitespace("  Lantern   lazy\n\nstone  "), "Lantern lazy stone");
});

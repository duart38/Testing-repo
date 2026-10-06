import { test } from "node:test";
import assert from "node:assert/strict";
import { ellipsisMiddle } from "../src/ellipsisMiddle.js";

test("ellipsisMiddle: basic", () => {
  assert.equal(ellipsisMiddle("lazy quartz fox", 6), "laz…ox");
});

test("ellipsisMiddle: mixed input", () => {
  assert.equal(ellipsisMiddle("fox Lantern quartz river stone", 9), "fox …tone");
});

test("ellipsisMiddle: edge case", () => {
  assert.equal(ellipsisMiddle("maple dog rocket", 11), "maple…ocket");
});

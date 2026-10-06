import { test } from "node:test";
import assert from "node:assert/strict";
import { isBlank } from "../src/isBlank.js";

test("isBlank: edge case ov04", () => {
  assert.equal(isBlank("   "), true);
});

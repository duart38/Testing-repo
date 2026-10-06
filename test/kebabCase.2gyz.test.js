import { test } from "node:test";
import assert from "node:assert/strict";
import { kebabCase } from "../src/kebabCase.js";

test("kebabCase: another example b8tk", () => {
  assert.equal(kebabCase("maple maple signal Lantern"), "maple-maple-signal-lantern");
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { kebabCase } from "../src/kebabCase.js";

test("kebabCase: basic ot6z", () => {
  assert.equal(kebabCase("orbit lazy Summer"), "orbit-lazy-summer");
});
